class CategoryController {
  constructor($stateParams, $scope, faqHelper, $uibModal, ArticleService, SettingsService) {
    "ngInject";

    this.status = $stateParams.status;

    if (this.status && this.status != 'all') {
      this.name = `All ${this.status}s FAQ`;
    } else {
      this.name = `All FAQ`;
    }
    this.$scope = $scope;
    this.faqHelper = faqHelper;
    this.$uibModal = $uibModal;

    this.currentCategory = 1;
    this.ArticleService = ArticleService;
    this.SettingsService = SettingsService;

    $scope.$on('updateArticles', () => {
      console.log('$on: updateArticles');
      this.getAllData(this, true);
    });

    this.getAllData(this);
  }

  getCurentCategoryName() {
    return this.name;
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

        self.tree = {
          articles: (self.status == 'all')
            ? result
            : result.filter((a) => a.status == self.status)
        };

      })

  };

}

export default CategoryController;
