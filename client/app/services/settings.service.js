import config, {apiUrl} from '../config';

function SettingsService($http, $q, SessionService) {
  "ngInject";
  let settings = null;

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
      self.deferred.resolve(result.data.data);
      delete self.deferred;
    });

    return self.deferred.promise;
  };

  return {
    getSettings
  }
}

export default SettingsService;
