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
        "username": {
          type: "string",
          title: "Email",
          minLength: 5,
          "pattern": "^\\S+@\\S+$",
          "x-schema-form": {
            placeholder: "email"
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
      required: ["email","password"]
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
