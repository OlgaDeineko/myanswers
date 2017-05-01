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

    this.initForm();
  }

  initForm() {
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
  }

  save(form, newUser) {
    this.$scope.$broadcast('schemaFormValidate');
    if (form.$valid) {
      this.UserService.forgotPassword(newUser.email)
        .then((result) => {
          this.toastr.success(this.translate('MESSAGES.EMAIL_SENT'));
          this.$uibModalInstance.close(result);
        })
        .catch((error) => {
          error.data.errors.forEach((error) => {
            this.toastr.error(error.message, this.translate('MESSAGES.VALIDATION_ERROR'));
          });
        })
    }
  }

  cancel() {
    this.$uibModalInstance.dismiss();
  }
}

export default ForgotPasswordModalController;
