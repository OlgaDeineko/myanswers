class ChooseSubdomainModalController {
  constructor($scope, $window, SettingsService, SessionService) {
    'ngInject';

    this.name = 'Choose Subdomain ';
    let self = this;

    this.subdomains = [];
    this.$uibModalInstance = $scope.$parent.$uibModalInstance;
    this.$window = $window;
    this.SessionService = SessionService;
    this.params = {
      t: SessionService.getToken(),
      r: SessionService.getRole(),
      n: SessionService.getFullName(),
    };

    SettingsService.getAllSubdomains()
      .then((res) => {
        self.subdomains = res.subdomains;
      })
  }

  choose(subdomain) {
    this.SessionService.destroy();
    this.$window.location = `http://${subdomain}.myanswers.io/superadmin/chooseSubdomain?t=${this.params.t}&r=${this.params.r}&n=${this.params.n}&d=${subdomain}`;
    // this.$window.location = `http://${subdomain}.localhost:3000/superadmin/chooseSubdomain?t=${this.params.t}&r=${this.params.r}&n=${this.params.n}&d=${subdomain}`;
  }

  cancel() {
    this.$uibModalInstance.dismiss({$value: 'cancel'});
  }

}

export default ChooseSubdomainModalController;
