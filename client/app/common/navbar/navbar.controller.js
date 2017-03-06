import {mainDomain, defaultSubdomain} from '../../config';

class NavbarController {
  constructor($uibModal, $window, AuthenticationService) {
    "ngInject";

    this.name = 'navbar';

    this.$window = $window;
    this.$uibModal = $uibModal;

    this.AuthenticationService = AuthenticationService;
  }

  logout() {
    this.AuthenticationService.logOut();
    this.$window.location.href = `http://${defaultSubdomain}.${mainDomain}/subdomain`;
  }

  openChooseDomain() {
    this.$uibModal.open({
      component: 'chooseSubdomainModal'
    });
  }
}

export default NavbarController;
