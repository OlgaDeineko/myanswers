import {langIcons, visibilityIcons, defaultKBSettings} from '../config';

function SettingsService($http, $rootScope, $q, $translate, SessionService) {
  "ngInject";
  this.commonSettings = null;
  this.subdomains = null;
  this.visibleArticles = null;
  this.KBSettings = {
    lang: {
      code: "en"
    },
    filter: {
      sort_by: "NAME_ASC"
    }
  };

  let _setKBSettings = (KBSettings = null) => {
    this.KBSettings = KBSettings || this.KBSettings;
    $rootScope.KBSettings = this.KBSettings ;
    $translate.use(this.KBSettings.lang.code);
    SessionService.kbSettings.data = KBSettings;
  };

  /**
   * get common settings
   * @returns {Promise<Object>}
   */
  let getCommonSettings = () => {
    let self = this;

    if (this.commonSettings) {
      return new Promise((resolve) => {
        resolve(self.commonSettings);
      })
    }

    if (self.deferred) return self.deferred.promise;
    this.deferred = $q.defer();

    $http({
      method: 'GET',
      url: `${SessionService.geApiUrl()}/settings/common`,
    }).then((result) => {
      self.commonSettings = result.data.data;
      self.commonSettings.languages.map((lang) => {
        lang.icon = langIcons[lang.code];
      });
      self.commonSettings.faq_visibility.map((vis) => {
        vis.icon = visibilityIcons[vis.code];
      });
      $rootScope.settings = self.commonSettings;
      self.deferred.resolve(self.commonSettings);
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
   * @param {string} language - language code (en, dl, etc.)
   */
  let changeLanguage = (language) => {
    this.KBSettings.lang.code = language;
    $rootScope.KBSettings.lang.code = language;
    $translate.use(language);
    $rootScope.$broadcast('KBSettingsChanged','language');
    saveKBSettings(this.KBSettings);
  };

  /**
   * change current category order
   * @param {string} order - language code (NAME_ASC, CUSTOM, LAST_CREATED, etc.)
   */
  let changeCategoryOrder = (order) => {
    this.KBSettings.filter.sort_by = order;
    $rootScope.KBSettings.filter.sort_by = order;
    $rootScope.$broadcast('KBSettingsChanged','order');
    saveKBSettings(this.KBSettings);
  };

  /**
   * get kb settings (lang, order, visibility faq, etc.)
   * @returns {Promise<object>}
   */
  let getKBSettings = () => {
    _setKBSettings(SessionService.kbSettings.data);
    return $http({
      method: 'GET',
      url: `${SessionService.geApiUrl()}/settings/dashboard`
    }).then(result => {
      this.visibleArticles = (result.data.data.shared_resources && result.data.data.shared_resources.faq) || [];
      delete result.data.data.shared_resources;
      _setKBSettings(result.data.data);
    });
  };

  /**
   * save kb settings
   * @param {object} KBSettings
   * @returns {Promise}
   */
  let saveKBSettings = (KBSettings) => {
    SessionService.kbSettings.data = KBSettings;
    return $http({
      method: 'POST',
      url: `${SessionService.geApiUrl()}/settings/dashboard`,
      data: KBSettings
    })
  };

  /**
   * get visible article for current user
   * @returns {string[]}
   */
  let getVisibleArticles = () => {
    return this.visibleArticles || []
  };

  return {
    getCommonSettings,
    getAllSubdomains,
    changeLanguage,
    changeCategoryOrder,
    getKBSettings,
    saveKBSettings,
    getVisibleArticles,
  }
}

export default SettingsService;
