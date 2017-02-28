class EditFaqController {
  constructor($state, toastr, CategoryService, ArticleService, SettingsService, SessionService) {
    'ngInject';
    this.name = 'editFaq';

    let self = this;
    this.$state = $state;
    this.toastr = toastr;
    this.CategoryService = CategoryService;
    this.ArticleService = ArticleService;
    this.SettingsService = SettingsService;

    this.faq = {};
    this.categories = [];
    this.mode = 'create';
    if ($state.current.name == 'editFaq'){
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
      this.faq = {
        question: '',
        answer: '',
        categories: $state.params.categoryId || '1',
        tags: [],
        visibility: 'public',
        author: {id: '12345', full_name: SessionService.getFullName()},
        lang: 'en',
        is_open_comments: true,
        status: 'draft',
        remarks: [],
        countWords: 0,
        countChars: 0
      };
    } else {
      this.ArticleService.getById($state.params.faqId)
        .then((result) => {
          //don't ask)))
          result.categories = result.categories[0].id + '';
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
    /*
     * {string[]} new_tags - array of new tags
     * {integer[]} tag_ids - array of old tags
     * */
    this.faq.new_tags = [];
    this.faq.tag_ids = [];

    this.faq.tags.map((i) => {
      if (i.tag_id) {
        self.faq.tag_ids.push(i.tag_id);
      } else {
        self.faq.new_tags.push(i.name);
      }
    });
    this.faq.category_ids = [this.faq.categories];
    this.faq.status = status || 'published';
      this.ArticleService[this.mode](this.faq)
        .then((result) => {
          self.$state.go("faq", {'faqId': result.id});
          self.toastr.success(`FAQ ${self.mode}d successfully.`)
        })
  }

  remove() {
    let self = this;
    this.ArticleService.remove(this.faq.id)
      .then((result) => {
        self.$state.go("category");
        self.toastr.success('FAQ removed successfully.')
      })
  }
}

export default EditFaqController;

