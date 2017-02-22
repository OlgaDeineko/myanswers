import config, {apiUrl} from '../config';

function CategoryService($http, SessionService) {
  "ngInject";
  let languages = null;

  let getCommon = () => {
    let self = this;
    // return $http({
    //   method: 'GET',
    //   url: `${SessionService.geApiUrl()}/settings/common`,
    // }).then(result => {
    //   self.languages = result.data.data.languages;
    // });

    self.languages = [{"code":"en","name":"English"},{"code":"nl","name":"Dutch"},{"code":"fr","name":"French"}]
  };

  let getLanguages = () => {
    return this.languages;
  };

  return {
    getCommon,
    getLanguages
  }
}

export default CategoryService;
