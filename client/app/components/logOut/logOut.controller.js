class LogOutController {
  constructor($state, AuthenticationService) {
    "ngInject";
    this.AuthenticationService = AuthenticationService;
    this.$state = $state;
    this.name = 'logOut';
  }

  leave() {
    this.AuthenticationService.logOut();
    this.$state.go("chooseSubdomain");
  }
}

export default LogOutController;
