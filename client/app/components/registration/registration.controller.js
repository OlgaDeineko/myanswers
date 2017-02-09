class RegistrationController {
  constructor(AuthenticationService) {
    "ngInject";

    this.name = 'Registration';
    this.AuthenticationService = AuthenticationService;

    this.newUser = {}

    this.schema = {
      type: "object",
      properties: {
        email: {
          type: "string",
          title: "email",
          minLength: 5,
          "pattern": "^\\S+@\\S+$",
          "x-schema-form": {
            placeholder: "email"
          }
        },
        subdomain: {
          minLength: 5,
          type: "string",
          title: "subdomain",
          "x-schema-form": {
            "placeholder": "subdomain"
          }
        },
        password: {
          minLength: 5,
          type: "string",
          title: "password",
          "x-schema-form": {
            "type": "password",
            "placeholder": "password"
          }
        },
        password_repeat: {
          minLength: 5,
          type: "string",
          title: "password repeat",
          "x-schema-form": {
            "type": "password",
            "placeholder": "password repeat"
          }
        }
      }
    }

    this.form = [
      "*"
    ]
  }

  register(form) {
    alert(form.$valid);
    if (form.$valid) {
      let newUser = this.newUser;
      debugger;
      this.AuthenticationService.register(newUser)
        .then(result => {
            console.log('result', result);
        })
        .catch(error => {
            console.log('error', error);
        })
    }
  }
}

export default RegistrationController;
