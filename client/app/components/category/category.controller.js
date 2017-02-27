let parseTreeCategory = (categories) => {
  categories.forEach((category, i) => {
    categories[i].categories = categories.filter(c => c.parent_id == category.id);
  });
  return categories;
};

let filterArticles = (articles, categoryId) => {
  return articles.filter(article => article.categories.find(c => c.id == categoryId));
};

let filterCategories = (categories, categoryId) => {
  return categories.filter(c => c.id == categoryId);
};

class CategoryController {
  constructor($stateParams, $scope, $uibModal, CategoryService, ArticleService, SettingsService) {
    "ngInject";

    this.name = 'Dashboard';
    this.uncategoryId = 1;
    this.$uibModal = $uibModal;

    this.ArticleService = ArticleService;
    this.CategoryService = CategoryService;
    this.SettingsService = SettingsService;

    this.currentCategory = $stateParams.categoryId || this.uncategoryId;
    this.categories = [];
    this.articles = [];
    this.articlesArr = [];

    $scope.$on('updateArticles', () => {
      console.log('$on: updateArticles');
      this.getAllData(this, true);
    });
    $scope.$on('updateCategories', () => {
      console.log('$on: updateCategories');
      this.getAllData(this, true);
    });

    this.getAllData(this);
  }

  getCurentCategoryName() {
    return (this.categories.length && this.currentCategory != this.uncategoryId)
      ? this.categories.find(c => c.id == this.currentCategory).name
      : this.name;
  }

  createCategory() {
    let modalInstance = this.$uibModal.open({
      component: 'createCategoryModal'
    });
  };

  getAllData(self, update) {
    self.CategoryService.getAll(update)
      .then((result) => {
        let categoriesTree = parseTreeCategory(result);
        self.categories = filterCategories(categoriesTree, self.currentCategory);
      });
    self.ArticleService.getAll(update)
      .then(result => {
        self.articles = filterArticles(result, self.currentCategory);
        return result;
      })
      .then(result => {
        self.SettingsService.getSettings().then(settings => {

          self.articlesCounts = {
            All: result.length,
          };
          settings.faq_statuses.map(status => {
            self.articlesCounts[status.name] = result.filter(article => article.status == status.code).length;
          })
        })
      })
  };

}

export default CategoryController;
