class CategoryController {
  constructor($stateParams, $scope, $uibModal) {
    "ngInject";

    this.articleType = $stateParams.status;
    this.name = 'FAQ.STATUSES_PAGE.' + this.articleType.toUpperCase();

    this.$scope = $scope;
    this.$uibModal = $uibModal;
    this.tree = null;

    this.currentCategory = 1;
  }

  createCategory() {
    this.$uibModal.open({
      component: 'createCategoryModal'
    });
  };
}

export default CategoryController;
