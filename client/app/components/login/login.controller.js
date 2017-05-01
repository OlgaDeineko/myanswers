import config, {mainDomian, defaultSubdomain} from '../../config';

class LoginController {
  constructor($scope, $state, $filter, $uibModal, toastr, UserService, SessionService, SettingsService) {
    "ngInject";

    this.name = 'REGISTRATION.LOGIN';

    this.$scope = $scope;
    this.$state = $state;
    this.$uibModal = $uibModal;
    this.toastr = toastr;
    this.translate = $filter('translate');

    this.UserService = UserService;
    this.SettingsService = SettingsService;

    this.subdomain = SessionService.getSubdomain();

    this.user = {};
    this.initForm();

    if (this.subdomain == defaultSubdomain) {
      this.$state.go("chooseSubdomain");
    }
  }

  initForm() {
    this.schema = {
      type: "object",
      properties: {
        "email": {
          type: "string",
          title: this.translate('REGISTRATION.EMAIL'),
          minLength: 5,
          "pattern": /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
          "x-schema-form": {
            placeholder: this.translate('REGISTRATION.EMAIL'),
          },
          validationMessage: {
            202: this.translate('MESSAGES.EMAIL_INVALID')
          },
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
        }
      },
      required: ["subdomain", "email", "password"]
    };
  }

  login(loginForm, user) {
    this.$scope.$broadcast('schemaFormValidate');
    if (loginForm.$valid) {
      user.subdomain = this.subdomain;
      this.UserService.login(user)
        .then(() => {
          return this.SettingsService.getKBSettings();
        })
        .then(() => {
          if (this.UserService.getRole() == 'visitor') {
            this.$state.go("visitor");
          } else {
            this.$state.go("admin.category");
          }
        })
        .catch((error) => {
          error.data.errors.forEach(error => {
            this.toastr.error(error.message, this.translate('MESSAGES.VALIDATION_ERROR'));
          });
        })
    }
  }

  forgot() {
    this.$uibModal.open({
      component: 'forgotPasswordModal'
    });
  }
}

export default LoginController;
