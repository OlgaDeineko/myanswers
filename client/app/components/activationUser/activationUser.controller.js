class ActivationUserController {
  constructor($state, toastr, AuthenticationService) {
    'ngInject';

    this.name = 'activationUser';
    let self = this;

    this.toastr = toastr;

    AuthenticationService.sendActivation($state.params.token)
      .then((result) => {
        self.toastr.success('Account has been activated!');
        $state.go('chooseSubdomain');
      }, (error) => {
        error.data.errors.forEach(error => {
          self.toastr.error(error.message, `Validation error:`);
          $state.go('chooseSubdomain');
        });
      })
  }
}

export default ActivationUserController;
