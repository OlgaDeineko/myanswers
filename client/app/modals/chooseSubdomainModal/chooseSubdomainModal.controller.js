import {mainDomain} from '../../config';

class ChooseSubdomainModalController {
  constructor($scope, $window, SettingsService, SessionService) {
    'ngInject';

    this.name = 'SUBDOMAIN.TITLE';
    let self = this;

    this.$window = $window;
    this.SessionService = SessionService;

    this.$uibModalInstance = $scope.$parent.$uibModalInstance;

    this.subdomains = [];

    SettingsService.getAllSubdomains()
      .then((res) => {
        self.subdomains = res.subdomains;
      })
  }

  choose(subdomain) {
    let token = `t=${this.SessionService.token.data}`;
    let role = `r=${this.SessionService.getRole()}`;
    let name = `n=${this.SessionService.getFullName()}`;
    this.SessionService.destroy();
    this.$window.location = `http://${subdomain}.${mainDomain}/superadmin/chooseSubdomain?${token}&${role}&${name}&d=${subdomain}`;
  }

  cancel() {
    this.$uibModalInstance.dismiss();
  }
}

export default ChooseSubdomainModalController;
