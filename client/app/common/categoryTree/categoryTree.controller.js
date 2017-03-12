class CategoryTreeController {
  constructor($rootScope, CategoryService, ArticleService, $filter, $state) {
    'ngInject';

    this.name = 'categoryTree';
    this.CategoryService = CategoryService;
    this.$filter = $filter('filter');
    this.$state = $state;
    let self = this;

    this.sorting = [
      {
        name: 'Custom',
        cat: '',
        faq: ''
      },
      {
        name: 'Name[A-Z]',
        cat: 'name',
        faq: 'question'
      },
      {
        name: 'Name[Z-a]',
        cat: '-name',
        faq: '-question'
      },
      {
        name: 'Author[A-Z]',
        cat: 'author',
        faq: 'author'
      },
      {
        name: 'Author[Z-a]',
        cat: '-author',
        faq: '-author'
      },
      {
        name: 'Last Created',
        cat: '-crated_at',
        faq: '-crated_at'
      },
      {
        name: 'Last Updated',
        cat: '-updated_at',
        faq: '-updated_at'
      },
    ];
    this.languages = $rootScope.settings.languages;

    this.language = {"code": "en", "name": "English"};
    this.sort = {
      name: 'Custom',
      cat: '',
      faq: ''
    };

    Promise.all([
      CategoryService.getAll(),
      ArticleService.getAll()
    ]).then((result) => {
      self.allCategories = result[0].filter((category) => category.parent_id != 0);
      self.allArticles = result[1].filter((article) => article.status != 'trash');
    })


    this.searchModel = "";
  }

  getCategories() {
    if(this.categories && this.categories.parent_id != 1 && this.searchModel.length && this.$state.current.name != 'admin.faqCategories') {
      let cat = this.$filter(this.allCategories, {name: this.searchModel}) || [];
      this.countC = cat.length;
      return cat
    }else{
      let cat = this.$filter(this.categories.categories, {name: this.searchModel}) || [];
      this.countC = cat.length;
      return cat
    }
  }

  getArticles() {
    if(this.categories && this.categories.parent_id != 1 && this.searchModel.length && this.$state.current.name != 'admin.faqCategories') {
      let art = this.$filter(this.allArticles, {question: this.searchModel}) || [];
      this.countA = art.length;
      return art
    }else{
      let art = this.$filter(this.categories.articles, {question: this.searchModel}) || [];
      this.countA = art.length;
      return art
    }
  }

  moved(index, item) {
    let self = this;
    this.categories.categories.splice(index, 1);

    let idx = 0;

    function next() {
      if (idx < self.categories.categories.length) {
        if(self.categories.categories[idx].sort_order != idx) {
          self.categories.categories[idx].sort_order = idx;

          self.CategoryService.update2(self.categories.categories[idx++]).then(next);
        }else{
          idx++;
          next();
        }
      }
    }

    next();

  }
}

export default CategoryTreeController;
