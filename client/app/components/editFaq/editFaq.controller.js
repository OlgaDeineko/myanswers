class EditFaqController {
  constructor($state, $scope, toastr, faqHelper, CategoryService, ArticleService, SettingsService, SessionService, FilesService) {
    'ngInject';
    this.name = 'editFaq';

    let self = this;
    this.$state = $state;
    this.$scope = $scope;
    this.toastr = toastr;
    this.CategoryService = CategoryService;
    this.SessionService = SessionService;
    this.ArticleService = ArticleService;
    this.SettingsService = SettingsService;
    this.FilesService = FilesService;

    this.faq = {};
    this.categories = [];
    this.mode = 'create';
    this.loadingFileFlag = true;
    this.filesBase64 = [];
    if ($state.current.name == 'admin.editFaq') {
      this.mode = 'update';
    }

    // configs for tinyMCE editor @see {@link https://www.tinymce.com/docs/}
    // this.tinymceOptions = {
    //   plugins: 'link image wordcount',
    //   themes: "modern",
    //   skin: false,
    //   height: 350,
    //   menubar: 'edit insert view format table tools',
    //   resize: false,
    //   toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
    //   menu: {
    //     file: {title: 'File', items: 'newdocument'},
    //     edit: {title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall'},
    //     insert: {title: 'Insert', items: 'link media | template hr'},
    //     view: {title: 'View', items: 'visualaid'},
    //     format: {
    //       title: 'Format',
    //       items: 'bold italic underline strikethrough superscript subscript | formats | removeformat'
    //     },
    //     table: {title: 'Table', items: 'inserttable tableprops deletetable | cell row column'},
    //     tools: {title: 'Tools', items: 'spellchecker code'}
    //   }
    // };
    this.tinymceOptions = {
      //plugins: 'link image wordcount',
      themes: "modern",
      skin: false,
      height: 350,
      resize: false,


      plugins: [
        'advlist autolink lists link image charmap print preview hr anchor pagebreak',
        'searchreplace wordcount visualblocks visualchars code fullscreen',
        'insertdatetime media nonbreaking save table contextmenu directionality',
        'emoticons template paste textcolor colorpicker textpattern imagetools codesample toc'
      ],
      toolbar1: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
      toolbar2: 'print preview media | forecolor backcolor emoticons | codesample',
      image_advtab: true,
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

    this.CategoryService.getAll()
      .then((result) => {
        self.categories = result;
        return result;
      })
      .then(() => {
        self.SettingsService.getSettings().then(result => {
          this.languages = result.languages;
          this.faqVisibility = result.faq_visibility;
          this.faqStatuses = result.faq_statuses;
        })
      })
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
  save(status) {
    let self = this;

    this.ArticleService[this.mode](this.faq)
      .then(result => {
        if(self.filesBase64.length){
          self.FilesService.create(self.filesBase64, 'faq', result.id);
        }
        return result
      })
      .then(result => {
        self.$state.go("admin.faq", {'faqId': result.id});
        self.toastr.success(`FAQ ${self.mode}d successfully.`)
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
      self.toastr.error("File must be document (*.doc, *.docx, *.pdf)");
      return false;
    }
    self.loadingFileFlag = true;

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

  removeFile(idx, $flow){
    $flow.files.splice(idx, 1);
    this.filesBase64.splice(idx, 1)
  }

}

export default EditFaqController;

