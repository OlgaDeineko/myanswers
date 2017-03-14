import config, {mainDomian, defaultSubdomain} from '../../config';

class LoginController {
  constructor($scope, $state, $uibModal, toastr, AuthenticationService, SessionService) {
    "ngInject";

    this.name = 'Login';

    this.$scope = $scope;
    this.$state = $state;
    this.$uibModal = $uibModal;
    this.toastr = toastr;

    this.SessionService = SessionService;
    this.AuthenticationService = AuthenticationService;

    this.subdomain = SessionService.getSubdomain();

    this.user = {};
    this.schema = {
      type: "object",
      properties: {
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
        }
      },
      required: ["subdomain", "email","password"]
    };
    this.form = [
      "*"
    ];

    if(this.subdomain == defaultSubdomain) {
      this.$state.go("chooseSubdomain");
    }
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
            self.toastr.error(error.message, `Validation error:`);
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
