class EditFaqController {
  constructor($state, $scope, $document, $rootScope, $filter, $translate, toastr, faqHelper, CategoryService,
              ArticleService, SettingsService, FilesService, UsersService, UserService) {
    'ngInject';
    this.name = 'editFaq';

    this.$state = $state;
    this.$scope = $scope;
    this.toastr = toastr;
    this.translate = $filter('translate');

    this.CategoryService = CategoryService;
    this.ArticleService = ArticleService;
    this.SettingsService = SettingsService;
    this.FilesService = FilesService;
    this.UserService = UserService;

    this.languages = $rootScope.settings.languages;
    this.faqVisibility = $rootScope.settings.faq_visibility;
    this.faqStatuses = $rootScope.settings.faq_statuses;
    this.categories = [];
    this.mode = 'create';
    this.loadingFileFlag = true;
    this.filesBase64 = [];
    this.removedFiles = [];
    this.users = [];

    if ($state.current.name == 'admin.editFaq') {
      this.mode = 'update';
    }

    let uploadFileForTinimce = (callback, value, meta) => {
      if (meta.filetype == 'image') {
        $('#tinymceUploader').trigger('click');
        $('#tinymceUploader').on('change', function () {
          let file = this.files[0];
          if (!/\.(jpeg|jpg|png)$/.test(file.name)) {
            this.toastr.error(this.translate('MESSAGES.ERROR_IMAGE_TYPE'));
            $('#tinymceUploader').unbind('change');
            return false;
          }
          let reader = new FileReader();
          let fileName = `${Math.random().toString(36).substring(2)}${file.name.match(/.*(\.\w{3,4})$/)[1]}`;

          let self = this;
          reader.onload = (event) => {
            self.FilesService.create([{name: fileName, base64: event.target.result}], 'faq_editor', '0')
              .then((result) => {
                callback(result[0].attachment_url, {
                  alt: ''
                });
                $('#tinymceUploader').unbind('change')
              });
          };

          reader.readAsDataURL(file);
        });
      }
    };

    $scope.$on('KBSettingsChanged', (ev, type) => {
      this.tinymceOptions.language_url = `/i18n/tinyMCE/${this.$scope.$root.KBSettings.lang.code}.js`;
      this.tinymceOptions.language = this.$scope.$root.KBSettings.lang.code;
      $rootScope.$broadcast('$tinymce:refresh');
    });

    $rootScope.$on('$translateChangeSuccess', function () {
      $translate("FAQ.KEYWORDS_PLACEHOLDER")
        .then(function (res) {
          $document.find('.tags>input').attr('placeholder', res);
        });
    });

    // configs for tinyMCE editor @see https://www.tinymce.com/docs/
    this.tinymceOptions = {
      themes: "modern",
      skin: false,
      height: 350,
      resize: false,
      language_url: `/i18n/tinyMCE/${$scope.$root.KBSettings.lang.code}.js`,
      language : 'en',
      plugins: [
        'advlist autolink lists link image charmap print preview hr anchor pagebreak',
        'searchreplace visualblocks visualchars code fullscreen',
        'insertdatetime media nonbreaking save table contextmenu directionality',
        'emoticons template paste textcolor colorpicker textpattern imagetools codesample toc'
      ],
      toolbar1: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
      toolbar2: 'print preview media | forecolor backcolor emoticons | codesample',
      image_advtab: true,

      paste_data_images: true,
      file_picker_callback: uploadFileForTinimce
    };

    //state can be in two states: createFaq or editFaq. for create - empty object, for edit - grab from server
    if (this.mode == 'create') {
      this.faq = faqHelper.newFaq($state.params.categoryId, UserService.getFullName());
      CategoryService.getById($state.params.categoryId || 1)
        .then(category => {
          this.parentCategory = category;
        });
    } else {
      this.ArticleService.getById($state.params.faqId)
        .then((result) => {
          this.faq = result;
        })
        .then(() => {
          return CategoryService.getById(this.faq.categoryId)
        })
        .then(category => {
          this.parentCategory = category;
        });
    }

    this.CategoryService.getAll()
      .then((result) => {
        this.categories = result;
      });
  }

  /**
   * Add remark to article
   * @param {string} data - text remark
   */
  addRemark(data) {
    this.faq.remarks.push(data)
  }

  /**
   * Create/update article
   */
  save() {
    this.ArticleService[this.mode](this.faq)
      .then((result) => {
        if (this.filesBase64.length) {
          this.ArticleService.saveAttachments(this.filesBase64, result.id);
        }
        return result
      })
      .then((result) => {
        if (this.removedFiles.length) {
          Promise.all(
            this.removedFiles.map((file) => {
              return this.FilesService.remove(file.name, file.model, file.model_id);
            })
          )
        }
        return result
      })
      .then((result) => {
        this.$state.go("admin.faq", {'faqId': result.id});
        this.toastr.success(this.translate(`MESSAGES.FAQ_${this.mode.toUpperCase()}`))
      })
      .catch((error) => {
        error.data.errors.forEach(error => {
          this.toastr.error(error.message, this.translate('MESSAGES.VALIDATION_ERROR'));
        });
      })
  }

  remove() {
    this.ArticleService.remove(this.faq.id)
      .then((result) => {
        this.$state.go("admin.category");
        this.toastr.success('FAQ removed successfully.')
      })
  }

  addedNewFile(file, event, $flow) {
    if (!/\.(doc|docx|pdf)$/.test(file.file.name)) {
      this.toastr.error(this.translate('MESSAGES.ERROR_DOCUMENT_TYPE'));
      return false;
    }
    this.loadingFileFlag = true;

    let reader = new FileReader();

    reader.onload = (event) => {
      this.filesBase64.push({name: file.name, base64: event.target.result});
    };

    reader.onloadend = () => {
      this.loadingFileFlag = false;
      this.$scope.$apply();
    };

    reader.readAsDataURL(file.file);
  };

  removeFile(idx, $flow) {
    $flow.files.splice(idx, 1);
    this.filesBase64.splice(idx, 1)
  }

  removeOldFile(file, index) {
    this.faq.attachments.splice(index, 1);
    this.removedFiles.push({
      name: file.name,
      model: file.model,
      model_id: file.model_id
    })
  }
}

export default EditFaqController;

