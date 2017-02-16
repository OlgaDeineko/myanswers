class ChooseSubdomainController {
  constructor($window, SubdomainService) {
    "ngInject";

    this.SubdomainService = SubdomainService;
    this.$window = $window;
    this.name = 'Choose subdomain';
    this.alerts = [];
  }

  subdomianIsValid() {
    let result = false;
    if(this.subdomian){
      result = !!this.subdomian.length > 0;
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
        //   alert('not subdomian');
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
