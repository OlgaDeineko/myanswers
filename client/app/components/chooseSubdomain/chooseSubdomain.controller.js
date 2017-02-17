class ChooseSubdomainController {
  constructor($window, SubdomainService) {
    "ngInject";

    this.SubdomainService = SubdomainService;
    this.$window = $window;
    this.name = 'Choose subdomain';
    this.alerts = [];
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
        // if(result.errors){
        //   alert('not subdomain');
        // }else{
          this.$window.location.href = `http://${subdomain}.myanswers.io/login/${subdomain}`;
        // }
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
