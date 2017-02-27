class EditFaqController {
  constructor($state, toastr, CategoryService, ArticleService, SettingsService) {
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


    // configs for tinyMCE editor @see {@link https://www.tinymce.com/docs/}
    this.tinymceOptions = {
      plugins: 'link image wordcount',
      themes: "modern",
      skin: false,
      height: 350,
      menubar: 'edit insert view format table tools',
      resize: false,
      toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
      menu: {
        file: {title: 'File', items: 'newdocument'},
        edit: {title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall'},
        insert: {title: 'Insert', items: 'link media | template hr'},
        view: {title: 'View', items: 'visualaid'},
        format: {
          title: 'Format',
          items: 'bold italic underline strikethrough superscript subscript | formats | removeformat'
        },
        table: {title: 'Table', items: 'inserttable tableprops deletetable | cell row column'},
        tools: {title: 'Tools', items: 'spellchecker code'}
      }
    };

    //state can be in two states: createFaq or editFaq. for create - empty object, for edit - grab from server
    if ($state.current.name == 'createFaq') {
      this.faq = {
        question: '',
        answer: '',
        categories: $state.params.categoryId || '1',
        tags: [],
        visibility: 'Public',
        author: 'Test User',
        lang: 'en',
        is_open_comments: true,
        published: true,
        remarks: [],
        draft: false,
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

        self.SettingsService.getSettings().then(result => {
          this.languages = result.languages;
          this.faqVisibility = result.faq_visibility;
          this.getFaqStatuses = result.faq_statuses;
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
    if (this.$state.current.name == 'createFaq') {
      this.ArticleService.save(this.faq)
        .then((result) => {
          self.$state.go("faq", {'faqId': result.id});
          self.toastr.success('FAQ created successfully.')
        })
    } else {
      this.ArticleService.update(this.faq)
        .then((result) => {
          self.$state.go("faq", {'faqId': result.id});
          self.toastr.success('FAQ updated successfully.')
        })
    }
  }

  saveAsDraft() {
    this.save('draft');
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

