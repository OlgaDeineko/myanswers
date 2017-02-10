class RegistrationController {
  constructor($scope, AuthenticationService) {
    "ngInject";
    this.$scope = $scope;
    this.name = 'Registration';
    this.AuthenticationService = AuthenticationService;

    this.newUser = {};
    this.schema = {
      type: "object",
      properties: {
        "email": {
          type: "string",
          title: "Email",
          minLength: 5,
          "pattern": "^\\S+@\\S+$",
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

  register(form, newUser) {
    const self = this;
    this.$scope.$broadcast('schemaFormValidate');
    if (form.$valid) {
      this.AuthenticationService.register(newUser)
        .then(result => {
            self.successMessage = [{
              description: 'Done'
            }];
            self.errorMessage = [];
        })
        .catch(error => {
            self.errorMessage = error.data.errors;
        })
    }
  }
}

export default RegistrationController;
