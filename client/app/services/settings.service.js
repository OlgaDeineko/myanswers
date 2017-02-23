import config, {apiUrl} from '../config';

function SettingsService($http, SessionService) {
  "ngInject";
  let languages = null;
  let roles = null;

  let getCommon = () => {
    let self = this;
    return $http({
      method: 'GET',
      url: `${SessionService.geApiUrl()}/settings/common`,
    }).then(result => {
      self.languages = result.data.data.languages;
      self.roles = result.data.data.roles;
    });

    // self.languages = [{"code":"en","name":"English"},{"code":"nl","name":"Dutch"},{"code":"fr","name":"French"}]
    // self.roles = [{"code":"admin","name":"admin"},{"code":"user","name":"user"},{"code":"visitor","name":"visitor"},{"code":"contributor","name":"contributor"}]
  };

  let getLanguages = () => {
    //TODO fix this
    return this.languages || [{"code":"en","name":"English"},{"code":"nl","name":"Dutch"},{"code":"fr","name":"French"}];
  };

  let getRoles = () => {
    return this.roles;
  };

  return {
    getCommon,
    getLanguages,
    getRoles
  }
}

export default SettingsService;
