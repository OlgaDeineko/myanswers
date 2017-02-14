class LoginController {
  constructor($scope, AuthenticationService, SessionService, $location, $rootScope) {
    "ngInject";

    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.$location = $location;
    this.name = 'login';
    this.SessionService = SessionService;
    this.AuthenticationService = AuthenticationService;

    this.alerts = [];

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
        "subdomain": {
          type: "string",
          title: "Subdomain",
          minLength: 5,
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
        }
      },
      required: ["subdomain", "email","password"]
    };
    this.form = [
      "*"
    ];
  }

  closeAlert(index) {
    this.alerts.splice(index, 1);
  };

  login(loginForm, user) {
    let self = this;
    this.$scope.$broadcast('schemaFormValidate');
    if(loginForm.$valid) {
      this.AuthenticationService.login(user)
        .then(result => {
          self.SessionService.create(result.data.data.access_token);
          self.$location.path('/');
        })
        .catch(error => {
          error.data.errors.forEach(error => {
            self.alerts.push({
              type: 'danger',
              msg: error.description
            })
          });
        })
    }
  }

}

export default LoginController;
