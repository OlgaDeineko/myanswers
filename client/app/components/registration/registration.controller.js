class RegistrationController {
  constructor(AuthenticationService) {
    "ngInject";

    this.name = 'Registration';
    this.AuthenticationService = AuthenticationService;
    this.newUser = {
      email: '',
      subdomain: '',
      password: '',
      password_repeat: ''
    }
  }

  register() {
    let newUser = this.newUser;
    this.AuthenticationService.register(newUser)
      .then(result => {
          console.log('result', result);
      })
      .catch(error => {
          console.log('error', error);
      })
  }
}

export default RegistrationController;
