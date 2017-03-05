class CategoryController {
  constructor($stateParams, $scope, $uibModal, faqHelper, categoryHelper, CategoryService, ArticleService) {
    "ngInject";

    this.name = 'Dashboard';
    this.uncategoryId = 1;
    this.$uibModal = $uibModal;
    this.$scope = $scope;

    this.ArticleService = ArticleService;
    this.CategoryService = CategoryService;
    this.faqHelper = faqHelper;
    this.categoryHelper = categoryHelper;

    this.currentCategory = $stateParams.categoryId || this.uncategoryId;
    this.categories = [];
    this.articles = [];

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
    this.$uibModal.open({
      component: 'createCategoryModal'
    });
  };

  getAllData(self, update) {
    Promise.all([
      self.CategoryService.getAll(update),
      self.ArticleService.getAll(update)
    ]).then((res) => {
      let categories = res[0];
      let articles = res[1];

      self.articlesCounts = self.faqHelper.countsTypes(articles);
      self.tree = self.categoryHelper.buildTree(articles, categories, self.currentCategory);

      self.$scope.$apply();
    })
  };

}

export default CategoryController;
