import {MAIN_DOMAIN} from '../../constants/config';

class ChooseSubdomainModalController {
  constructor($scope, $window, SettingsService, SessionService) {
    'ngInject';

    this.name = 'SUBDOMAIN.TITLE';

    this.$window = $window;
    this.SessionService = SessionService;

    this.$uibModalInstance = $scope.$parent.$uibModalInstance;

    this.subdomains = [];

    SettingsService.getAllSubdomains()
      .then((res) => {
        this.subdomains = res.subdomains;
      })
  }

  choose(subdomain) {
    let token = `t=${this.SessionService.token.data}`;
    let user = `u=${JSON.stringify(this.SessionService.user.data)}`;
    this.SessionService.token.remove();
    this.SessionService.subdomain.remove();
    this.SessionService.user.remove();
    this.$window.location = `http://${subdomain}.${MAIN_DOMAIN}/superadmin/chooseSubdomain?${token}&${user}&d=${subdomain}`;
  }

  cancel() {
    this.$uibModalInstance.dismiss();
  }
}

export default ChooseSubdomainModalController;
