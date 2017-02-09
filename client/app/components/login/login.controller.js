class LoginController {
  constructor(AuthenticationService) {
    "ngInject";

    this.name = 'login';
    this.AuthenticationService = AuthenticationService;
    this.user = {
      email: '',
      password: '',
    }
  }

  login(newUser) {
    let user = this.user;
    this.AuthenticationService.login(user)
      .then(result => {
          console.log('result', result);
      })
      .catch(error => {
          console.log('error', error);
      })
  }

}

export default LoginController;
