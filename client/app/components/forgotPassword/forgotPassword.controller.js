class ForgotPasswordController {
  constructor($scope, $state, toastr, AuthenticationService) {
    'ngInject';

    this.name = 'Reset password';
    this.$state = $state;
    this.toastr = toastr;
    this.$scope = $scope;
    this.AuthenticationService = AuthenticationService;

    this.newPass = {};

    this.schema = {
      type: "object",
      properties: {
        "password": {
          minLength: 8,
          type: "string",
          title: "Password",
          "pattern": /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
          "x-schema-form": {
            "type": "password",
            "placeholder": "password"
          },
          validationMessage: {
            202: 'Password must contain 1 uppercase letter, 1 lowercase letter and 1 number'
          },
        },
        "password_repeat": {
          minLength: 8,
          type: "string",
          title: "Password repeat",
          constant: {
            "$data": "1/password"
          },
          "x-schema-form": {
            "type": "password",
            "placeholder": "password repeat"
          }
        }
      },
      required: ["password", "password_repeat"]
    }
    this.form = [
      "*"
    ]
  }

  save(form, newPass) {
    let self = this;
    this.$scope.$broadcast('schemaFormValidate');
    if (form.$valid) {
      this.AuthenticationService.resetPassword(this.$state.params.resetToken, newPass.password)
        .then(result => {
          if (result.status == 0 || result.status == 404) {
            result.errors.forEach(error => {
              self.toastr.error(error.description, `Validation error:`);
            });
          } else {
            self.toastr.success('Password changed successfully');
            this.$state.go('chooseSubdomain');
          }
        }, err => {
          self.toastr.error(err.data.message, `Validation error:`);
        })
    }
  }
}

export default ForgotPasswordController;
