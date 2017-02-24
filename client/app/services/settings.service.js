import config, {apiUrl} from '../config';

function SettingsService($http, SessionService) {
  "ngInject";
  let languages = null;
  let roles = null;
  let faqStatuses = [{"code": "published", "name": "Published"}, {"code": "draft", "name": "Draft"}];
  let faqVisibility =[{"code": "public", "name": "Public"}, {"code": "internal", "name": "Internal"}, {"code": "private", "name": "Private"}];
  

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
    return this.roles ||  [{"code":"admin","name":"admin"},{"code":"user","name":"user"},{"code":"visitor","name":"visitor"},{"code":"contributor","name":"contributor"}];
  };

  let getFaqStatuses = () => {
    return this.faqStatuses
  };

  let getFaqVisibility = () => {
    return this.faqVisibility
  };

  return {
    getCommon,
    getLanguages,
    getRoles,
    getFaqStatuses,
    getFaqVisibility
  }
}

export default SettingsService;
