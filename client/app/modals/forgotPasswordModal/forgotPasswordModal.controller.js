class ForgotPasswordModalController {

  constructor($scope, toastr, AuthenticationService) {
    'ngInject';
    this.name = 'Forgot Password';

    this.$scope = $scope;
    this.toastr = toastr;

    this.AuthenticationService = AuthenticationService;

    this.$uibModalInstance = $scope.$parent.$uibModalInstance;

    this.forgotPassword = {};

    this.schema = {
      type: "object",
      properties: {
        "email": {
          type: "string",
          title: "Email",
          minLength: 5,
          "pattern": /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
          "x-schema-form": {
            placeholder: "email",
          },
          validationMessage: {
            202: 'Invalid email'
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
      self.AuthenticationService.forgotPassword(newUser.email)
        .then((result) => {
          self.toastr.success('Email sent');
          self.$uibModalInstance.close(result);
        }, (error) => {
          error.data.errors.forEach((error) => {
            self.toastr.error(error.message, 'Validation error:');
          });
        })
    }
  }

  cancel() {
    this.$uibModalInstance.dismiss();
  }
}

export default ForgotPasswordModalController;
