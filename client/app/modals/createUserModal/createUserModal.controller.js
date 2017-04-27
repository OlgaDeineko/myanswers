class CreateUserModalController {
  constructor($scope, $rootScope, $filter, toastr, UsersService) {
    'ngInject';
    this.name = 'createUserModal';

    this.$scope = $scope;
    this.toastr = toastr;
    this.translate = $filter('translate');

    this.UsersService = UsersService;

    this.mode = 'create';

    this.$uibModalInstance = $scope.$parent.$uibModalInstance;
    this.$resolve = $scope.$parent.$resolve;

    this.newUser = {};

    if (this.$resolve.user) {
      this.newUser = this.$resolve.user;
      this.newUser.role = this.newUser.roleName
      this.mode = 'update';
    }

    this.schema = {
      type: "object",
      properties: {
        "email": {
          type: "string",
          title: this.translate('REGISTRATION.EMAIL'),
          minLength: 5,
          "pattern": /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
          "x-schema-form": {
            placeholder: this.translate('REGISTRATION.EMAIL')
          },
          validationMessage: {
            202: this.translate('MESSAGES.EMAIL_INVALID')
          },
        },
        "first_name": {
          type: "string",
          title: this.translate('REGISTRATION.FIRST_NAME'),
          minLength: 3,
          "x-schema-form": {
            placeholder: this.translate('REGISTRATION.FIRST_NAME')
          }
        },
        "last_name": {
          type: "string",
          title: this.translate('REGISTRATION.LAST_NAME'),
          minLength: 3,
          "x-schema-form": {
            placeholder: this.translate('REGISTRATION.LAST_NAME')
          }
        },
        "role": {
          type: "string",
        }
      },
      required: ["email", "first_name", "last_name", "role"]
    };

    this.form = [
      "email", "first_name", "last_name",
      {
        key: 'role',
        type: "select",
        title: this.translate('USERS.ROLE'),
        titleMap: $rootScope.settings.roles.map((item) => {
          return {value: item.code, name: item.name};
        })
      },
    ];
  }

  save(form, newUser) {
    let self = this;
    this.$scope.$broadcast('schemaFormValidate');
    if (form.$valid) {
      self.UsersService[self.mode](newUser)
        .then((result) => {
          self.toastr.success(self.translate(`MESSAGES.USER_${self.mode.toUpperCase()}`));
          self.$uibModalInstance.close(result);
        }, (error) => {
          error.data.errors.forEach(error => {
            self.toastr.error(error.message, self.translate('MESSAGES.VALIDATION_ERROR'));
          });
        })
    }
  }

  cancel() {
    this.$uibModalInstance.dismiss();
  }
}

export default CreateUserModalController;
