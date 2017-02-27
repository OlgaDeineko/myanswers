import {local} from '../../config';
class ChooseSubdomainController {
  constructor($window, toastr, SubdomainService) {
    "ngInject";

    this.SubdomainService = SubdomainService;
    this.$window = $window;
    this.toastr = toastr;
    this.name = 'Choose subdomain';

    //TODO remove on production
    let partsHost = $window.location.host.split('.');
    if ((partsHost.length > 2 || local) && partsHost[0] != 'main') {
      this.subdomain = partsHost[0];
      this.moveTo(this.subdomain);
    }
  }

  subdomainIsValid() {
    let result = false;
    if (this.subdomain) {
      result = !!this.subdomain.length > 0;
    }
    return result;
  }

  moveTo(subdomain) {
    let self = this;
    this.SubdomainService.check(subdomain)
      .then(result => {
        if (result.status == 0) {
          result.errors.forEach(error => {
            self.toastr.error(error.description, `Validation error:`);
          });
        } else {
          //TODO remove on production
          if (local) {
            this.$window.location.href = `http://${subdomain}.localhost:3000/login/${subdomain}`;
          } else
            this.$window.location.href = `http://${subdomain}.myanswers.io/login/${subdomain}`;
        }

      })
  }
}

export default ChooseSubdomainController;
