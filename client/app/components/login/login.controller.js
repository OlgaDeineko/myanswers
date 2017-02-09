class LoginController {
  constructor(AuthenticationService) {
    "ngInject";

    this.name = 'login';
    this.AuthenticationService = AuthenticationService;
  }

  register(newUser) {
    this.AuthenticationService.register(newUser)
      .then(result => {
          console.log('result', result);
      })
      .catch(error => {
          console.log('error', error);
      })
  }

}

export default LoginController;
