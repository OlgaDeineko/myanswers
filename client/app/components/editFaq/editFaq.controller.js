class EditFaqController {
  constructor($state, $scope, $rootScope, $filter, toastr, faqHelper, CategoryService,
              ArticleService, SettingsService, SessionService, FilesService, UsersService) {
    'ngInject';
    this.name = 'editFaq';
    let self = this;

    this.$state = $state;
    this.$scope = $scope;
    this.toastr = toastr;
    this.translate = $filter('translate');

    this.CategoryService = CategoryService;
    this.SessionService = SessionService;
    this.ArticleService = ArticleService;
    this.SettingsService = SettingsService;
    this.FilesService = FilesService;

    this.languages = $rootScope.settings.languages;
    this.faqVisibility = $rootScope.settings.faq_visibility;
    this.faqStatuses = $rootScope.settings.faq_statuses;
    this.faq = {};
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
            self.toastr.error(self.translate('MESSAGES.ERROR_IMAGE_TYPE'));
            $('#tinymceUploader').unbind('change');
            return false;
          }
          let reader = new FileReader();
          let fileName = `${Math.random().toString(36).substring(2)}${file.name.match(/.*(\.\w{3,4})$/)[1]}`;
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
      self.tinymceOptions.language_url = `/i18n/tinyMCE/${self.$scope.$root.KBSettings.lang.code}.js`;
    });

    // configs for tinyMCE editor @see https://www.tinymce.com/docs/
    this.tinymceOptions = {
      themes: "modern",
      skin: false,
      height: 350,
      resize: false,
      language_url: `/i18n/tinyMCE/${$scope.$root.KBSettings.lang.code}.js`,
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
      this.faq = faqHelper.newFaq($state.params.categoryId, SessionService.getFullName());
    } else {
      this.ArticleService.getById($state.params.faqId)
        .then((result) => {
          self.faq = result;
        })
    }

    CategoryService.getById($state.params.categoryId || 1)
      .then(category => {

        UsersService.getAll()
          .then((result) => {
            console.log('need remove self', self === this);
            console.log('category', category, result);
            if (category.id == 1) {
              this.users = result;
            } else {
              this.users = result.filter(u => category.granted_access.indexOf(u.id) > -1);
            }
          });
      });


    this.CategoryService.getAll()
      .then((result) => {
        self.categories = result;
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
    let self = this;

    this.ArticleService[this.mode](this.faq)
      .then((result) => {
        if (self.filesBase64.length) {
          self.ArticleService.saveAttachments(self.filesBase64, result.id);
        }
        return result
      })
      .then((result) => {
        if (self.removedFiles.length) {
          Promise.all(
            self.removedFiles.map((file) => {
              return self.FilesService.remove(file.name, file.model, file.model_id);
            })
          )
        }
        return result
      })
      .then((result) => {
        self.$state.go("admin.faq", {'faqId': result.id});
        self.toastr.success(self.translate(`MESSAGES.FAQ_${self.mode.toUpperCase()}`))
      })
      .catch((error) => {
        error.data.errors.forEach(error => {
          self.toastr.error(error.message, self.translate('MESSAGES.VALIDATION_ERROR'));
        });
      })
  }

  remove() {
    let self = this;
    this.ArticleService.remove(this.faq.id)
      .then((result) => {
        self.$state.go("admin.category");
        self.toastr.success('FAQ removed successfully.')
      })
  }

  addedNewFile(file, event, $flow) {
    let self = this;

    if (!/\.(doc|docx|pdf)$/.test(file.file.name)) {
      this.toastr.error(self.translate('MESSAGES.ERROR_DOCUMENT_TYPE'));
      return false;
    }
    this.loadingFileFlag = true;

    let reader = new FileReader();

    reader.onload = (event) => {
      self.filesBase64.push({name: file.name, base64: event.target.result});
    };

    reader.onloadend = () => {
      self.loadingFileFlag = false;
      self.$scope.$apply();
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

