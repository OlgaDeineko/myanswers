import {local} from '../../config';
class ChooseSubdomainController {
  constructor($window, SubdomainService) {
    "ngInject";

    this.SubdomainService = SubdomainService;
    this.$window = $window;
    this.name = 'Choose subdomain';
    this.alerts = [];

    //TODO remove on production
    let partsHost = $window.location.host.split('.');
    if ((partsHost.length > 2 || local) && partsHost[0] != 'main') {
      this.subdomain = partsHost[0];
      this.moveTo(this.subdomain);
    }
  }

  subdomainIsValid() {
    let result = false;
    if(this.subdomain){
      result = !!this.subdomain.length > 0;
    }
    return result;
  }

  closeAlert(index) {
    this.alerts.splice(index, 1);
  };

  moveTo(subdomain) {
    let self = this;
    this.SubdomainService.check(subdomain)
      .then(result => {
        //TODO remove on production
        if(local){
          this.$window.location.href = `http://${subdomain}.localhost:3000/login/${subdomain}`;
        }else
          this.$window.location.href = `http://${subdomain}.myanswers.io/login/${subdomain}`;
      })
      .catch(errors => {
        errors.forEach(err => {
          self.alerts.push({
            type: 'danger',
            msg: err.description
          })
        });
      })
  }
}

export default ChooseSubdomainController;
