import config, {apiUrl, defaultSubdomain, protocol} from '../config';

function SessionService($window) {
  "ngInject";

  /**
   * @class SessionObject
   */
  class SessionObject {
    /**
     * constructor
     * @param {string} key - attribute for save in local/session storage
     * @param {string} [storage='local'] - type session storage local or session
     */
    constructor(key, storage = 'local') {
      this._key = key;
      this._storage = (storage == 'local') ? $window.localStorage : $window.sessionStorage;
    }

    /**
     * getter
     * @returns {*}
     */
    get data() {
      let data = this._storage[this._key];
      try {
        data = JSON.parse(data);
      } catch (e) {
      }

      return data;
    }

    /**
     * setter
     * @param {*} data
     */
    set data(data) {
      if (typeof data == 'object') {
        data = JSON.stringify(data);
      }
      this._storage[this._key] = data;
    }

    /**
     * remove from storage
     */
    remove() {
      this._storage.removeItem(this._key);
    }
  }

  let user = new SessionObject('user');
  let previousPage = new SessionObject('previous_page', 'session');
  let kbSettings = new SessionObject('kb_settings');
  let token = new SessionObject('access_token');
  let subdomain = new SessionObject('subdomain');

  /**
   * set data to local data
   * @param {string} accessToken
   * @param {string} subdomain
   * @param {string} role
   * @param {string} fullName
   */
  let create = (accessToken, subdomain, role, fullName) => {
    //TODO merge to user
    token.data = accessToken;
    // $window.localStorage['user_name'] = userName;
    getSubdomain.data = subdomain
    $window.localStorage['role'] = role;
    $window.localStorage['full_name'] = fullName;
  };

  /**
   * get api url
   * @returns {string}
   */
  let geApiUrl = () => {
    let userSubdomain = subdomain.data|| $window.location.host.match(/[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?/) || defaultSubdomain;
    return `${protocol}${userSubdomain}.${apiUrl}`;
  };

  /**
   * get role
   * @returns {string}
   */
  let getRole = () => {
    //TODO merge to user
    return $window.localStorage['role'];
  };

  /**
   * get subdomain
   * @returns {string}
   */
  let getSubdomain = () => {
    return subdomain.data || $window.location.host.match(/[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?/)[0];
  };

  /**
   * get user full name
   * @returns {string}
   */
  let getFullName = () => {
    //TODO merge to user
    return $window.localStorage['full_name'];
  };

  /**
   * clear local storage
   */
  let destroy = () => {
    //TODO merge to user
    token.remove()
    // $window.localStorage.removeItem('user_name');
    subdomain.remove();
    $window.localStorage.removeItem('role');
    $window.localStorage.removeItem('full_name');
  };

  /**
   * set previous page
   * @param {string} state
   * @param {object} params
   */
  let setPreviousPage = (state, params) => {
    let notReturn = ['admin.editFaq', 'admin.faq', 'admin.createFaq'];
    if (state && notReturn.indexOf(state) == -1) {
      previousPage.data = {stateName: state, params: params}
    }
  };

  return {
    create,
    destroy,
    getSubdomain,
    getRole,
    geApiUrl,
    getFullName,
    setPreviousPage,

    user,
    previousPage,
    kbSettings,
    token,
    subdomain,
  }
}


export default SessionService;
