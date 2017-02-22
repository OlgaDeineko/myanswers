class CreateUserModalController {
  constructor($scope, UsersService, SettingsService) {
    'ngInject';
    this.name = 'createUserModal';
    let self = this;

    this.$scope = $scope;
    this.UsersService = UsersService;

    this.mode = 'create';
    this.roles = SettingsService.getRoles();
    this.$uibModalInstance = $scope.$parent.$uibModalInstance;
    this.$resolve = $scope.$parent.$resolve;
    this.newUser = {};

    this.alerts = [];

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

    this.form = [
      "email", "first_name", "last_name",
      {
        key: 'role',
        type: "select",
        title: "Role",
        titleMap: this.roles.map((item) => {
          return {value: item.code, name: item.name};
        })
      },
    ];

  }

  save(form, newUser) {
    let self = this;
    this.$scope.$broadcast('schemaFormValidate');
    if (form.$valid) {
      console.log('newUser', newUser);
      self.UsersService[self.mode](newUser)
        .then((result) => {
          if (result.status == 0) {
            result.errors.forEach(error => {
              self.alerts.push({
                type: 'danger',
                msg: error.description
              })
            });
          } else {
            self.$uibModalInstance.close(result);
          }
        }, (error) => {
          error.data.errors.forEach(error => {
            self.alerts.push({
              type: 'danger',
              msg: error.description
            })
          });
        })
    }
  }

  cancel() {
    this.$uibModalInstance.dismiss();
  }

  closeAlert(index) {
    this.alerts.splice(index, 1);
  }
}

export default CreateUserModalController;
