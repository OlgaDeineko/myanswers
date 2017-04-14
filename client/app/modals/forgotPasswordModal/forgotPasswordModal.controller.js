class ForgotPasswordModalController {

  constructor($scope, $filter, toastr, UserService) {
    'ngInject';
    this.name = 'REGISTRATION.FORGOT_PASSWORD';

    this.$scope = $scope;
    this.toastr = toastr;
    this.translate = $filter('translate');

    this.UserService = UserService;

    this.$uibModalInstance = $scope.$parent.$uibModalInstance;

    this.forgotPassword = {};

    this.schema = {
      type: "object",
      properties: {
        "email": {
          type: "string",
          title: this.translate('REGISTRATION.EMAIL'),
          minLength: 5,
          "pattern": /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
          "x-schema-form": {
            placeholder: this.translate('REGISTRATION.EMAIL'),
          },
          validationMessage: {
            202: this.translate('MESSAGES.EMAIL_INVALID')
          },
        },
      },
      required: ["email"]
    };
    this.form = [
      "*",
    ];
  }

  save(form, newUser) {
    let self = this;
    this.$scope.$broadcast('schemaFormValidate');
    if (form.$valid) {
      self.UserService.forgotPassword(newUser.email)
        .then((result) => {
          self.toastr.success(self.translate('MESSAGES.EMAIL_SENT'));
          self.$uibModalInstance.close(result);
        }, (error) => {
          error.data.errors.forEach((error) => {
            self.toastr.error(error.message, self.translate('MESSAGES.VALIDATION_ERROR'));
          });
        })
    }
  }

  cancel() {
    this.$uibModalInstance.dismiss();
  }
}

export default ForgotPasswordModalController;
