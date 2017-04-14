class ActivationUserController {
  constructor($state, $filter, toastr, UserService) {
    'ngInject';

    this.name = 'activationUser';
    let self = this;

    this.toastr = toastr;
    this.translate = $filter('translate');

    UserService.sendActivation($state.params.token)
      .then((result) => {
        self.toastr.success(self.translate('MESSAGES.ACCOUNT_ACTIVATED'));
        $state.go('chooseSubdomain');
      }, (error) => {
        error.data.errors.forEach(error => {
          self.toastr.error(
            error.message,
            self.translate('MESSAGES.VALIDATION_ERROR')
          );
          $state.go('chooseSubdomain');
        });
      })
  }
}

export default ActivationUserController;
