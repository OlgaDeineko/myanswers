class ConfirmController {
  constructor($scope) {
    'ngInject';
    this.name = 'confirm';

    this.$uibModalInstance = $scope.$parent.$uibModalInstance;
    this.answer =  $scope.$parent.$resolve.text;
  }

  ok() {
    this.$uibModalInstance.close(true);

  }

  cancel() {
    this.$uibModalInstance.dismiss('cancel');
  }
}

export default ConfirmController;
