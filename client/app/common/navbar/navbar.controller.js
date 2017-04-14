import {mainDomain, defaultSubdomain} from '../../config';

class NavbarController {
  constructor($uibModal, $window, UserService) {
    "ngInject";

    this.name = 'navbar';

    this.$window = $window;
    this.$uibModal = $uibModal;

    this.UserService = UserService;
  }

  logout() {
    this.UserService.logOut();
    this.$window.location.href = `http://${defaultSubdomain}.${mainDomain}/subdomain`;
  }

  openChooseDomain() {
    this.$uibModal.open({
      component: 'chooseSubdomainModal'
    });
  }

  openChooseLanguage() {
    this.$uibModal.open({
      component: 'chooseLanguageModal'
    });
  }
}

export default NavbarController;
