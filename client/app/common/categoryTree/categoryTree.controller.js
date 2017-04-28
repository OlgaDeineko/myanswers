class CategoryTreeController {
  constructor($scope, CategoryService, ArticleService, SettingsService) {
    'ngInject';

    this.name = 'categoryTree';
    this.$scope = $scope;

    this.CategoryService = CategoryService;
    this.SettingsService = SettingsService;
    this.ArticleService = ArticleService;

    this.orderList = [
      {
        name: 'CUSTOM',
        cat: '',
        faq: ''
      },
      {
        name: 'NAME_ASC',
        cat: 'name',
        faq: 'question'
      },
      {
        name: 'NAME_DESC',
        cat: '-name',
        faq: '-question'
      },
      {
        name: 'AUTHOR_ASC',
        cat: 'author',
        faq: 'author'
      },
      {
        name: 'AUTHOR_DESC',
        cat: '-author',
        faq: '-author'
      },
      {
        name: 'LAST_CREATED',
        cat: '-crated_at',
        faq: '-crated_at'
      },
      {
        name: 'LAST_UPDATED',
        cat: '-updated_at',
        faq: '-updated_at'
      },
    ];
    this.order = this.orderList.find((o) => o.name == $scope.$root.KBSettings.filter.sort_by);

    this.searchModel = "";

    $scope.$on('updateArticles', () => {
      this.getAllData(true);
    });
    $scope.$on('updateCategories', () => {
      this.getAllData(true);
    });

    this.getAllData();
  }


  getAllData(update) {
    Promise.all([
      this.CategoryService.getAll(update),
      this.ArticleService.getAll(update)
    ]).then((result) => {
      this.allCategories = result[0].filter((category) => category.parent_id != 0);
      this.allArticles = (this.articleType == 'all')
        ? result[1].filter((a) => a.status != 'trash')
        : result[1].filter((a) => a.status == this.articleType);
      if (this.$scope.$root.$$phase != '$apply' && this.$scope.$root.$$phase != '$digest') this.$scope.$apply();
    });
  }

  moved(index, item) {
    let self = this;
    this.tree.categories.splice(index, 1);

    let idx = 0;

    //TODO: optimise this
    function next() {
      if (idx < self.tree.categories.length) {
        if (self.tree.categories[idx].sort_order != idx) {
          self.tree.categories[idx].sort_order = idx;
          self.CategoryService.changeOrder(self.tree.categories[idx++]).then(next);
        } else {
          idx++;
          next();
        }
      }
    }

    next();

  }

  changeOrder(item) {
    this.order = item;
    this.SettingsService.changeCategoryOrder(item.name);
  }
}

export default CategoryTreeController;
