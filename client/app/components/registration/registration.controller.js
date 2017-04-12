import {mainDomain} from '../../config';

class RegistrationController {
  constructor($scope, $window, $filter, $state, toastr, AuthenticationService) {
    "ngInject";
    this.name = 'REGISTRATION.TITLE';
    let self = this;

    this.$state = $state;
    this.$scope = $scope;
    this.$window = $window;
    this.toastr = toastr;
    this.translate = $filter('translate');

    this.AuthenticationService = AuthenticationService;

    this.registrationDone = false;
    this.isCreated = '';
    this.newUser = {};

    if ($scope.$root.translateIsReady) {
      self.initForm();
    } else {
      $scope.$root.$on('$translateChangeSuccess', function () {
        self.initForm();
      })
    }
  }


  initForm() {
    this.schema = {
      type: "object",
      properties: {
        "first_name": {
          minLength: 3,
          type: "string",
          title: this.translate('REGISTRATION.FIRST_NAME'),
          "x-schema-form": {
            "placeholder": this.translate('REGISTRATION.FIRST_NAME')
          }
        },
        "last_name": {
          minLength: 3,
          type: "string",
          title: this.translate('REGISTRATION.LAST_NAME'),
          "x-schema-form": {
            "placeholder": this.translate('REGISTRATION.LAST_NAME')
          }
        },
        "email": {
          type: "string",
          title: this.translate('REGISTRATION.EMAIL'),
          require: true,
          "pattern": /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
          "x-schema-form": {
            placeholder: this.translate('REGISTRATION.EMAIL'),
          },
          validationMessage: {
            202: this.translate('MESSAGES.EMAIL_INVALID')
          },
        },
        "subdomain": {
          require: true,
          minLength: 4,
          type: "string",
          title: this.translate('REGISTRATION.SUBDOMAIN'),
          "x-schema-form": {
            "placeholder": this.translate('REGISTRATION.SUBDOMAIN')
          }
        },
        "password": {
          minLength: 8,
          type: "string",
          title: this.translate('REGISTRATION.PASSWORD'),
          "pattern": /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
          "x-schema-form": {
            "type": "password",
            "placeholder": this.translate('REGISTRATION.PASSWORD')
          },
          validationMessage: {
            202: this.translate('MESSAGES.PASSWORD_INVALID')
          },
        },
        "password_repeat": {
          minLength: 8,
          type: "string",
          title: this.translate('REGISTRATION.REPEAT_PASSWORD'),
          constant: {
            "$data": "1/password"
          },
          "x-schema-form": {
            "type": "password",
            "placeholder": this.translate('REGISTRATION.REPEAT_PASSWORD')
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
          self.toastr.success(self.translate('MESSAGES.REGISTRATION_DONE_MSG'));
          self.registrationDone = true;
        }, (error) => {
          error.data.errors.forEach(error => {
            self.toastr.error(error.message, self.translate('MESSAGES.VALIDATION_ERROR'));
          });
        })
    }
  }
}

export default RegistrationController;
