class CategoryController {
  constructor($stateParams, $scope, $uibModal, categoryHelper, CategoryService, ArticleService) {
    "ngInject";

    this.name = 'DASHBOARD.TITLE';

    this.$uibModal = $uibModal;
    this.$scope = $scope;

    this.ArticleService = ArticleService;
    this.CategoryService = CategoryService;
    this.categoryHelper = categoryHelper;

    this.uncategoryId = 1;
    this.currentCategory = $stateParams.categoryId || this.uncategoryId;
    this.categories = [];
    this.articles = [];
    this.articleType = 'all';

    $scope.$on('updateArticles', () => {
      this.getAllData(this, true);
    });
    $scope.$on('updateCategories', () => {
      this.getAllData(this, true);
    });

    this.getAllData(this);
  }

  createCategory() {
    this.$uibModal.open({
      component: 'createCategoryModal',
      resolve: {
        parentCategory: this.tree
      }
    });
  };

  getAllData(self, update) {
    Promise.all([
      self.CategoryService.getAll(update),
      self.ArticleService.getAll(update)
    ]).then((res) => {
      let categories = res[0];
      let articles = res[1];

      self.tree = self.categoryHelper.buildTree(articles, categories, self.currentCategory);

      self.$scope.$apply();
    })
  };

}

export default CategoryController;
