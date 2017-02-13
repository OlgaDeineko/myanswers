class RegistrationController {
  constructor($scope, AuthenticationService) {
    "ngInject";
    this.$scope = $scope;
    this.name = 'Registration';
    this.AuthenticationService = AuthenticationService;

    this.alerts = [];

    this.newUser = {};
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
        "subdomain": {
          minLength: 5,
          type: "string",
          title: "Subdomain",
          "x-schema-form": {
            "placeholder": "subdomain"
          }
        },
        "password": {
          minLength: 5,
          type: "string",
          title: "Password",
          "x-schema-form": {
            "type": "password",
            "placeholder": "password"
          }
        },
        "password_repeat": {
          minLength: 5,
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
      required: ["email","subdomain","password","password_repeat"]
    }
    this.form = [
      "*"
    ]
  }

  closeAlert(index) {
    this.alerts.splice(index, 1);
  };

  register(form, newUser) {
    const self = this;
    this.$scope.$broadcast('schemaFormValidate');
    if (form.$valid) {
      this.AuthenticationService.register(newUser)
        .then(result => {
            self.alerts.push({
              type: 'success',
              msg: 'Done' });
        })
        .catch(error => {
            error.data.errors.forEach(error => {
              self.alerts.push({
                type: 'danger',
                msg: error.description })
            });
        })
    }
  }
}

export default RegistrationController;
