import {MAIN_DOMAIN, DEFAULT_SUBDOMAIN} from '../../constants/config';

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
    this.$window.location.href = `http://${DEFAULT_SUBDOMAIN}.${MAIN_DOMAIN}/subdomain`;
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
