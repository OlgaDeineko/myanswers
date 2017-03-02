class ActivationUserController {
  constructor($state, toastr, AuthenticationService) {
    'ngInject';

    this.name = 'activationUser';
    this.toastr = toastr;
    let self = this;

    AuthenticationService.sendActivation($state.params.token)
      .then(res => {
        self.toastr.success('Account has been activated!');
        $state.go('chooseSubdomain');
      }, err => {

        err.data.errors.forEach(error => {
          self.toastr.error(error.description, `Validation error:`);
          $state.go('chooseSubdomain');
        });
      })

  }
}

export default ActivationUserController;
