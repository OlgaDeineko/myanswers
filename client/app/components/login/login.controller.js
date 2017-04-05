import config, {mainDomian, defaultSubdomain} from '../../config';

class LoginController {
  constructor($scope, $state, $filter, $uibModal, toastr, AuthenticationService, SessionService) {
    "ngInject";

    this.name = 'REGISTRATION.LOGIN';
    let self = this;

    this.$scope = $scope;
    this.$state = $state;
    this.$uibModal = $uibModal;
    this.toastr = toastr;
    this.translate = $filter('translate');

    this.SessionService = SessionService;
    this.AuthenticationService = AuthenticationService;

    this.subdomain = SessionService.getSubdomain();

    this.user = {};

    if ($scope.$root.translateIsReady) {
      self.initForm();
    } else {
      $scope.$root.$on('$translateChangeSuccess', function () {
        self.initForm();
      })
    }

    if(this.subdomain == defaultSubdomain) {
      this.$state.go("chooseSubdomain");
    }
  }

  initForm() {
    let self = this;
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
    this.form = [
      "*"
    ];
  }

  login(loginForm, user) {
    let self = this;
    this.$scope.$broadcast('schemaFormValidate');
    if(loginForm.$valid) {
      user.subdomain = self.subdomain;
      this.AuthenticationService.login(user)
        .then((result) => {
          if(self.SessionService.getRole() == 'visitor'){
            self.$state.go("visitor");
          }else {
            self.$state.go("admin.category");
          }
        }, (error) => {
          error.data.errors.forEach(error => {
            self.toastr.error(error.message, self.translate('MESSAGES.VALIDATION_ERROR'));
          });
        })
    }
  }

  forgot(){
    this.$uibModal.open({
      component: 'forgotPasswordModal'
    });
  }
}

export default LoginController;
