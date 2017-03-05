class CreateUserModalController {
  constructor($scope, $rootScope, toastr, UsersService) {
    'ngInject';
    this.name = 'createUserModal';

    this.$scope = $scope;
    this.toastr = toastr;

    this.UsersService = UsersService;

    this.mode = 'create';

    this.$uibModalInstance = $scope.$parent.$uibModalInstance;
    this.$resolve = $scope.$parent.$resolve;

    this.newUser = {};

    if (this.$resolve.user) {
      this.newUser = this.$resolve.user;
      this.mode = 'update';
    }

    this.schema = {
      type: "object",
      properties: {
        "email": {
          type: "string",
          title: "Email",
          minLength: 5,
          "pattern": /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
          "x-schema-form": {
            placeholder: "email"
          },
          validationMessage: {
            202: 'Invalid email'
          },
        },
        "first_name": {
          type: "string",
          title: "First Name",
          minLength: 3,
          "x-schema-form": {
            placeholder: "First Name"
          }
        },
        "last_name": {
          type: "string",
          title: "Last Name",
          minLength: 3,
          "x-schema-form": {
            placeholder: "Last Name"
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
        title: "Role",
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
          self.toastr.success(`User ${self.mode}d successfully`);
          self.$uibModalInstance.close(result);
        }, (error) => {
          error.data.errors.forEach(error => {
            self.toastr.error(error.description, 'Validation error:');
          });
        })
    }
  }

  cancel() {
    this.$uibModalInstance.dismiss();
  }
}

export default CreateUserModalController;
