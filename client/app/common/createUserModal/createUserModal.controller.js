class CreateUserModalController {
  constructor($scope, UsersService, toastr, SettingsService) {
    'ngInject';
    this.name = 'createUserModal';
    let self = this;

    this.$scope = $scope;
    this.UsersService = UsersService;
    this.toastr = toastr;

    this.mode = 'create';
    SettingsService.getSettings().then(result => {
      self.roles = result.roles;

      self.form = [
        "email", "first_name", "last_name",
        {
          key: 'role',
          type: "select",
          title: "Role",
          titleMap: self.roles.map((item) => {
            return {value: item.code, name: item.name};
          })
        },
      ];
    });

    this.$uibModalInstance = $scope.$parent.$uibModalInstance;
    this.$resolve = $scope.$parent.$resolve;
    this.newUser = {};

    if (this.$resolve.user) {
      this.newUser = this.$resolve.user;
      this.newUser.role = this.newUser.role[0];
      this.mode = 'update';
    }

    this.schema = {
      type: "object",
      properties: {
        "email": {
          type: "string",
          title: "Email",
          minLength: 5,
          "pattern": "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$",
          "x-schema-form": {
            placeholder: "email"
          }
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

  }

  save(form, newUser) {
    let self = this;
    this.$scope.$broadcast('schemaFormValidate');
    if (form.$valid) {
      self.UsersService[self.mode](newUser)
        .then((result) => {
          if (result.status == 0) {
            result.errors.forEach(error => {
              self.toastr.error(error.description, `Validation error:`);
            });
          } else {
            self.toastr.success(`User ${self.mode}d successfully`);
            self.$uibModalInstance.close(result);
          }
        }, (error) => {
          error.data.errors.forEach(error => {
            self.toastr.error(error.description, `Validation error:`);
          });
        })
    }
  }

  cancel() {
    this.$uibModalInstance.dismiss();
  }
}

export default CreateUserModalController;
