import {mainDomain, defaultSubdomain} from '../../config';
class ChooseSubdomainController {
  constructor($window, toastr, SubdomainService, SessionService) {
    "ngInject";
    this.name = 'Choose subdomain';

    this.$window = $window;
    this.toastr = toastr;
    this.SubdomainService = SubdomainService;

    SessionService.destroy();

    let locationSubdomain = SessionService.getSubdomain();
    if (locationSubdomain != defaultSubdomain) {
      this.subdomain = locationSubdomain;
      this.moveTo(this.subdomain);
    }
  }

  moveTo(subdomain) {
    let self = this;
    this.SubdomainService.check(subdomain)
      .then((result) => {
        this.$window.location.href = `http://${subdomain}.${mainDomain}/login`;
      }, (error) => {
        error.data.errors.forEach((error) => {
          self.toastr.error(error.message, `Validation error:`);
        });
      })
  }
}

export default ChooseSubdomainController;
