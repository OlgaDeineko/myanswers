import {mainDomain, defaultSubdomain} from '../../config';
class ChooseSubdomainController {
  constructor($window, toastr, SubdomainService, SessionService) {
    "ngInject";

    this.SubdomainService = SubdomainService;
    this.$window = $window;
    this.toastr = toastr;
    this.name = 'Choose subdomain';
    SessionService.destroy();

    let locationSubdomain = $window.location.host.match(/[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?/);
    if (locationSubdomain != defaultSubdomain) {
      this.subdomain = locationSubdomain;
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
        if (result.status == 0 || result.status == 404) {
          result.errors.forEach(error => {
            self.toastr.error(error.description, `Validation error:`);
          });
        } else {
          this.$window.location.href = `http://${subdomain}.${mainDomain}/login/${subdomain}`;
        }
      })
  }
}

export default ChooseSubdomainController;
