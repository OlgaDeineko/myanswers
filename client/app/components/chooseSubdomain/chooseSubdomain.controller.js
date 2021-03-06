import {MAIN_DOMAIN, DEFAULT_SUBDOMAIN} from '../../constants/config';

class ChooseSubdomainController {
  constructor($window, $filter, toastr, SubdomainService, SessionService) {
    "ngInject";
    this.name = 'SUBDOMAIN.TITLE';

    this.$window = $window;
    this.toastr = toastr;
    this.translate = $filter('translate');
    this.SubdomainService = SubdomainService;

    SessionService.user.remove();
    SessionService.token.remove();

    let locationSubdomain = SessionService.getSubdomain();
    if (locationSubdomain != DEFAULT_SUBDOMAIN) {
      this.subdomain = locationSubdomain;
      this.moveTo(this.subdomain);
    }
  }

  moveTo(subdomain) {
    this.SubdomainService.check(subdomain)
      .then((result) => {
        this.$window.location.href = `http://${subdomain}.${MAIN_DOMAIN}/login`;
      })
      .catch((error) => {
        error.data.errors.forEach((error) => {
          this.toastr.error(error.message, this.translate('MESSAGES.VALIDATION_ERROR'));
        });
      })
  }
}

export default ChooseSubdomainController;
