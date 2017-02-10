class LoginController {
  constructor($scope, AuthenticationService) {
    "ngInject";

    this.$scope = $scope;
    this.name = 'login';
    this.AuthenticationService = AuthenticationService;

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

  login(loginForm, user) {
    this.$scope.$broadcast('schemaFormValidate');
    if(loginForm.$valid) {
      this.AuthenticationService.login(user)
        .then(result => {
            console.log('result', result);
        })
        .catch(error => {
            console.log('error', error);
        })
    }
  }

}

export default LoginController;
