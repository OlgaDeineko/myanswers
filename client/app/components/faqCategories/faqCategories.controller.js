class CategoryController {
  constructor($stateParams, $scope, faqHelper, categoryHelper, $uibModal, ArticleService, SettingsService) {
    "ngInject";

    this.articleType = $stateParams.status;
    this.name = 'FAQ.STATUSES_PAGE.' +  this.articleType.toUpperCase();

    this.$scope = $scope;
    this.$uibModal = $uibModal;

    this.ArticleService = ArticleService;
    this.SettingsService = SettingsService;
    this.categoryHelper = categoryHelper;
    this.faqHelper = faqHelper;

    this.currentCategory = 1;

    $scope.$on('updateArticles', () => {
      this.getAllData(this, true);
    });

    this.getAllData(this);
  }

  createCategory() {
    this.$uibModal.open({
      component: 'createCategoryModal'
    });
  };

  getAllData(self, update) {
    self.ArticleService.getAll(update)
      .then((result) => {
        self.articlesCounts = self.faqHelper.countsTypes(result);
        self.tree = null;
      })

  };

}

export default CategoryController;
