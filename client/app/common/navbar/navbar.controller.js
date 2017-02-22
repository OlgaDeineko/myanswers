class NavbarController {
  constructor($state, $window, AuthenticationService) {
    "ngInject";

    this.name = 'navbar';
    this.$state = $state;
    this.$window = $window;
    this.AuthenticationService = AuthenticationService;
  }

  logout() {
    this.AuthenticationService.logOut();
    if(this.$window.location.host.indexOf('localhost') != -1){
      this.$window.location.href = `http://main.localhost:3000/subdomain`;
    }else
    this.$window.location.href = `http://main.myanswers.io/subdomain`;
  }
}

export default NavbarController;
