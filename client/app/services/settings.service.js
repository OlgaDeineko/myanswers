import config, {langIcons, visibilityIcons} from '../config';

function SettingsService($http, $rootScope, $q, $translate, SessionService) {
  "ngInject";
  let settings = null;
  let subdomains = null;
  let currentLanguage = null;

  /**
   * get settings
   * @returns {Promise<Object>}
   */
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
    }).then((result) => {
      self.settings = result.data.data;
      self.settings.languages.map((lang) => {
        lang.icon = langIcons[lang.code];
      });
      self.settings.faq_visibility.map((vis) => {
        vis.icon = visibilityIcons[vis.code];
      });
      $rootScope.settings = self.settings;
      self.deferred.resolve(self.settings);
      delete self.deferred;
    });

    return self.deferred.promise;
  };

  /**
   * get all subdomains for superAdmin
   * @returns {Promise<object>}
   */
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
    }).then((result) => {
      self.subdomains = result.data.data;
      self.deferred2.resolve(self.subdomains);
      delete self.subdomains;
    });

    return self.deferred2.promise;
  };

  /**
   * change current language
   * @param language
   */
  let changeLanguage = (language) => {
    if(!language){
      language = getCurrentLanguage();
    }
    SessionService.setLanguage(language);
    this.currentLanguage = language;
    $translate.use(language);
  };

  /**
   * get current language
   * @returns {string} language code
   */
  let getCurrentLanguage = () => {
    let lang = this.currentLanguage || SessionService.getLanguage();
    if(!lang){
      lang = 'en';
    }
    this.currentLanguage = lang;
    return lang;
  };

  return {
    getSettings,
    getAllSubdomains,
    changeLanguage,
    getCurrentLanguage
  }
}

export default SettingsService;
