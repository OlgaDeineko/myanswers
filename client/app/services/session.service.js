import {API_URL, DEFAULT_SUBDOMAIN, PROTOCOL} from '../constants/config';
import {isUndefined} from 'angular';

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
      if(isUndefined(data)) return;

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
   * get api url
   * @returns {string}
   */
  let geApiUrl = () => {
    let userSubdomain = getSubdomain()|| DEFAULT_SUBDOMAIN;
    return `${PROTOCOL}${userSubdomain}.${API_URL}`;
  };

  /**
   * get subdomain
   * @returns {string}
   */
  let getSubdomain = () => {
    return subdomain.data || $window.location.host.match(/[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?/)[0];
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
    getSubdomain,
    geApiUrl,
    setPreviousPage,

    user,
    previousPage,
    kbSettings,
    token,
    subdomain,
  }
}


export default SessionService;
