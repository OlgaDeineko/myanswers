import {mainDomain} from '../../config';

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
    this.$window.location.href = `http://main.${mainDomain}/subdomain`;
  }

  openChooseDomain() {
    this.$uibModal.open({
      component: 'chooseSubdomainModal'
    });
  }
}

export default NavbarController;
