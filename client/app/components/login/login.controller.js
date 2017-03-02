import config, {mainDomian} from '../../config';

class LoginController {
  constructor($window, $stateParams, $scope, $uibModal, toastr, AuthenticationService, SessionService, $state, $rootScope) {
    "ngInject";

    this.$scope = $scope;

    this.$stateParams = $stateParams;
    this.$rootScope = $rootScope;
    this.$state = $state;
    this.$uibModal = $uibModal;
    this.$window = $window;
    this.name = 'Login';

    this.toastr = toastr;
    this.SessionService = SessionService;
    this.AuthenticationService = AuthenticationService;
    this.subdomain = this.$stateParams.subdomain || SessionService.getSubdomain();

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
        // "subdomain": {
        //   type: "string",
        //   title: "Subdomain",
        //   minLength: 5,
        //   "x-schema-form": {
        //     "placeholder": "subdomain"
        //   }
        // },
        "password": {
          minLength: 5,
          type: "string",
          title: "Password",
          "x-schema-form": {
            "type": "password",
            "placeholder": "password"
          }
        }
      },
      required: ["subdomain", "email","password"]
    };
    this.form = [
      "*"
    ];

    if(this.subdomain == false) this.$state.go("chooseSubdomain");
  }

  login(loginForm, user) {
    let self = this;
    this.$scope.$broadcast('schemaFormValidate');
    if(loginForm.$valid) {
      user.subdomain = self.subdomain;
      this.AuthenticationService.login(user, self.subdomain)
        .then(result => {
          self.$state.go("category");
        })
        .catch(error => {
          console.log(error)
          error.data.errors.forEach(error => {
            self.toastr.error(error.description, `Validation error:`);
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
