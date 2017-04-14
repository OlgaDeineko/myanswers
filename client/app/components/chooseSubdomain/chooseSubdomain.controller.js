import {mainDomain, defaultSubdomain} from '../../config';
class ChooseSubdomainController {
  constructor($window, $filter, toastr, SubdomainService, SessionService) {
    "ngInject";
    this.name = 'SUBDOMAIN.TITLE';

    this.$window = $window;
    this.toastr = toastr;
    this.translate = $filter('translate');
    this.SubdomainService = SubdomainService;

    SessionService.user.remove();

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
          self.toastr.error(error.message, self.translate('MESSAGES.VALIDATION_ERROR'));
        });
      })
  }
}

export default ChooseSubdomainController;
