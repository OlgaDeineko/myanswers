class RegistrationController {
  constructor($scope, $window, $state, toastr, AuthenticationService) {
    "ngInject";

    this.$state = $state;
    this.$scope = $scope;
    this.$window = $window;
    this.toastr = toastr;
    this.name = 'Registration';
    this.AuthenticationService = AuthenticationService;

    this.isCreated = '';

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
      required: ["email", "subdomain", "password", "password_repeat"]
    }
    this.form = [
      "*"
    ]
  }

  moteToLogin() {
    let self = this;
    if (self.isCreated) {
      this.$window.location.href = `http://${self.isCreated}.myanswers.io/login/${self.isCreated}`;
      // self.$state.go("login", {subdomain: self.isCreated});
    } else {
      self.$state.go("chooseSubdomain");
    }
  }

  register(form, newUser) {
    const self = this;
    this.$scope.$broadcast('schemaFormValidate');
    if (form.$valid) {
      this.AuthenticationService.register(newUser)
        .then(result => {
          self.isCreated = newUser.subdomain.toLowerCase();
          self.toastr.success(`Registration done`);
          self.moteToLogin();
        })
        .catch(error => {
          error.data.errors.forEach(error => {
            self.toastr.error(error.description, `Validation error:`);
          });
        })
    }
  }
}

export default RegistrationController;
