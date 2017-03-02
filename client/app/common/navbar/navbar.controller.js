class NavbarController {
  constructor($state, $uibModal, $window, AuthenticationService) {
    "ngInject";

    this.name = 'navbar';
    this.$state = $state;
    this.$window = $window;
    this.$uibModal = $uibModal;
    this.AuthenticationService = AuthenticationService;
  }

  logout() {
    this.AuthenticationService.logOut();
    if(this.$window.location.host.indexOf('localhost') != -1){
      this.$window.location.href = `http://main.localhost:3000/subdomain`;
    }else
    this.$window.location.href = `http://main.myanswers.io/subdomain`;
  }

  openChooseDomain() {
    this.$uibModal.open({
      component: 'chooseSubdomainModal'
    });
  }
}

export default NavbarController;
