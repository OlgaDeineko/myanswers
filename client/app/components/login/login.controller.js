import config, {mainDomian} from '../../config';

class LoginController {
  constructor($window, $stateParams, $scope, toastr, AuthenticationService, SessionService, $state, $rootScope) {
    "ngInject";

    this.$scope = $scope;

    this.$stateParams = $stateParams;
    this.$rootScope = $rootScope;
    this.$state = $state;
    this.$window = $window;
    this.name = 'login';

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
          "pattern": "^\\S+@\\S+$",
          "x-schema-form": {
            placeholder: "email"
          }
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
      this.AuthenticationService.login(user)
        .then(result => {
          self.$state.go("category");
        })
        .catch(error => {
          error.data.errors.forEach(error => {
            self.toastr.error(error.description, `Validation error:`);
          });
        })
    }
  }

}

export default LoginController;
