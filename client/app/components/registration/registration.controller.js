import {mainDomain} from '../../config';

class RegistrationController {
  constructor($scope, $window, $state, toastr, AuthenticationService) {
    "ngInject";
    this.name = 'Registration';

    this.$state = $state;
    this.$scope = $scope;
    this.$window = $window;
    this.toastr = toastr;

    this.AuthenticationService = AuthenticationService;

    this.registrationDone = false;
    this.isCreated = '';
    this.newUser = {};

    this.schema = {
      type: "object",
      properties: {
        "first_name": {
          minLength: 3,
          type: "string",
          title: "First name",
          "x-schema-form": {
            "placeholder": "First name"
          }
        },
        "last_name": {
          minLength: 3,
          type: "string",
          title: "Last name",
          "x-schema-form": {
            "placeholder": "Last name"
          }
        },
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
        "subdomain": {
          minLength: 5,
          type: "string",
          title: "Subdomain",
          "x-schema-form": {
            "placeholder": "subdomain"
          }
        },
        "password": {
          minLength: 8,
          type: "string",
          title: "Password",
          "pattern": /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
          "x-schema-form": {
            "type": "password",
            "placeholder": "password"
          },
          validationMessage: {
            202: 'Password must contain 1 uppercase letter, 1 lowercase letter and 1 number'
          },
        },
        "password_repeat": {
          minLength: 8,
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
      required: ["first_name", "last_name", "email", "subdomain", "password", "password_repeat"]
    };
    this.form = [
      "*"
    ]
  }

  moteToLogin() {
    if (this.isCreated) {
      this.$window.location.href = `http://${this.isCreated}.${mainDomain}/login`;
    } else {
      this.$state.go("chooseSubdomain");
    }
  }

  register(form, newUser) {
    const self = this;
    this.$scope.$broadcast('schemaFormValidate');
    if (form.$valid) {
      this.AuthenticationService.register(newUser)
        .then((result) => {
          self.isCreated = newUser.subdomain.toLowerCase();
          self.toastr.success(`Registration done`);
          self.registrationDone = true;
        }, (error) => {
          error.data.errors.forEach(error => {
            self.toastr.error(error.message, `Validation error:`);
          });
        })
    }
  }
}

export default RegistrationController;
