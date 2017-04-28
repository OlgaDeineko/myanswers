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
      this.getAllData(true);
    });
    $scope.$on('updateCategories', () => {
      this.getAllData(true);
    });

    this.getAllData();
  }

  createCategory() {
    this.$uibModal.open({
      component: 'createCategoryModal',
      resolve: {
        parentCategory: this.tree
      }
    });
  };

  getAllData(update) {
    Promise.all([
      this.CategoryService.getAll(update),
      this.ArticleService.getAll(update)
    ]).then((res) => {
      let categories = res[0];
      let articles = res[1];

      this.tree = this.categoryHelper.buildTree(articles, categories, this.currentCategory);

      this.$scope.$apply();
    })
  };

}

export default CategoryController;
