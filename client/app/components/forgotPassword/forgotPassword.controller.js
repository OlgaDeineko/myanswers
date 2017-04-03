class ForgotPasswordController {
  constructor($scope, $state, $filter, toastr, AuthenticationService) {
    'ngInject';

    this.name = 'REGISTRATION.RESET_PASSWORD';
    let self = this;

    this.$state = $state;
    this.toastr = toastr;
    this.$scope = $scope;
    this.translate = $filter('translate');

    this.AuthenticationService = AuthenticationService;

    this.newPass = {};
    $scope.$root.$on('$translateChangeSuccess', function () {
      self.schema = {
        type: "object",
        properties: {
          "password": {
            minLength: 8,
            type: "string",
            title: self.translate('REGISTRATION.PASSWORD'),
            "pattern": /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
            "x-schema-form": {
              "type": "password",
              "placeholder": self.translate('REGISTRATION.PASSWORD')
            },
            validationMessage: {
              202: self.translate('MESSAGES.PASSWORD_INVALID')
            },
          },
          "password_repeat": {
            minLength: 8,
            type: "string",
            title: self.translate('REGISTRATION.REPEAT_PASSWORD'),
            constant: {
              "$data": "1/password"
            },
            "x-schema-form": {
              "type": "password",
              "placeholder": self.translate('REGISTRATION.REPEAT_PASSWORD')
            }
          }
        },
        required: ["password", "password_repeat"]
      };

      self.form = [
        "*"
      ]
    })
  }

  save(form, newPass) {
    let self = this;
    this.$scope.$broadcast('schemaFormValidate');
    if (form.$valid) {
      this.AuthenticationService.resetPassword(this.$state.params.resetToken, newPass.password)
        .then((result) => {
          self.toastr.success(self.translate('MESSAGES.PASSWORD_CHANGED'));
          this.$state.go('chooseSubdomain');
        }, (error) => {
          self.toastr.error(error.data.message, self.translate('MESSAGES.VALIDATION_ERROR'));
        })
    }
  }
}

export default ForgotPasswordController;
