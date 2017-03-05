function SettingsService($http, $rootScope, $q, SessionService) {
  "ngInject";
  let settings = null;
  let subdomains = null;

  let getSettings = () => {
    let self = this;

    if (this.settings) {
      return new Promise((resolve) => {
        resolve(self.settings);
      })
    }

    if (self.deferred) return self.deferred.promise;
    this.deferred = $q.defer();

    $http({
      method: 'GET',
      url: `${SessionService.geApiUrl()}/settings/common`,
    }).then(result => {
      self.settings = result.data.data;
      $rootScope.settings = result.data.data;
      self.deferred.resolve(result.data.data);
      delete self.deferred;
    });

    return self.deferred.promise;
  };

  let getAllSubdomains = () => {
    let self = this;
    if (this.subdomains) {
      return new Promise((resolve) => {
        resolve(self.subdomains);
      })
    }

    if (self.deferred2) return self.deferred2.promise;
    this.deferred2 = $q.defer();

    $http({
      method: 'GET',
      url: `${SessionService.geApiUrl()}/settings/advanced`,
    }).then(result => {
      self.subdomains = result.data.data;
      self.deferred2.resolve(self.subdomains);
      delete self.subdomains;
    });

    return self.deferred2.promise;
  };

  return {
    getSettings,
    getAllSubdomains,
  }
}

export default SettingsService;
