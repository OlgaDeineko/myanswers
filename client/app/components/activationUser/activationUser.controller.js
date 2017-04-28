class ActivationUserController {
  constructor($state, $filter, toastr, UserService) {
    'ngInject';

    this.name = 'activationUser';

    this.toastr = toastr;
    this.translate = $filter('translate');

    UserService.sendActivation($state.params.token)
      .then((result) => {
        this.toastr.success(this.translate('MESSAGES.ACCOUNT_ACTIVATED'));
        $state.go('chooseSubdomain');
      })
      .catch((error) => {
        error.data.errors.forEach(error => {
          this.toastr.error(
            error.message,
            this.translate('MESSAGES.VALIDATION_ERROR')
          );
          $state.go('chooseSubdomain');
        });
      })
  }
}

export default ActivationUserController;
