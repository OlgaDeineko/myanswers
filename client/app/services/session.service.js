import config, {apiUrl, defaultSubdomain} from '../config';

function SessionService($window) {
  "ngInject";

  /**
   * set data to local data
   * @param {string} accessToken
   * @param {string} subdomain
   * @param {string} role
   * @param {string} fullName
   */
  let create = (accessToken, subdomain, role, fullName) => {
    $window.localStorage['access_token'] = accessToken;
    $window.localStorage['client_subdomain'] = subdomain;
    $window.localStorage['role'] = role;
    $window.localStorage['full_name'] = fullName;
  };

  /**
   * @returns {boolean}
   */
  let hasToken = () => {
    return !!$window.localStorage['access_token'];
  };

  /**
   * get api url
   * @returns {string}
   */
  let geApiUrl = () => {
    let userSubdomain = $window.localStorage['client_subdomain'] || $window.location.host.match(/[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?/) || defaultSubdomain;
    return `http://${userSubdomain}.${apiUrl}`;
  };

  /**
   * get token
   * @returns {string}
   */
  let getToken = () => {
    return $window.localStorage['access_token'];
  };

  /**
   * get role
   * @returns {string}
   */
  let getRole = () => {
    return $window.localStorage['role'];
  };

  /**
   * get subdomain
   * @returns {string}
   */
  let getSubdomain = () => {
    return $window.localStorage['client_subdomain'] || $window.location.host.match(/[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?/)[0];
  };

  /**
   * get user full name
   * @returns {string}
   */
  let getFullName = () => {
    return $window.localStorage['full_name'];
  };

  /**
   * clear local storage
   */
  let destroy = () => {
    $window.localStorage.removeItem('access_token');
    $window.localStorage.removeItem('client_subdomain');
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
      $window.sessionStorage['previous_page'] = JSON.stringify({stateName: state, params: params});
    }
  };

  /**
   * get previous page
   * @returns {object} state
   *  {string} state.stateName
   *  {object} state.params
   */
  let getPreviousPage = () => {
    return JSON.parse($window.sessionStorage['previous_page']);
  };

  /**
   * remove previous page
   */
  let removePreviousPage = () => {
    $window.sessionStorage.removeItem('previous_page');
  };

  return {
    create,
    hasToken,
    destroy,
    getSubdomain,
    getToken,
    getRole,
    geApiUrl,
    getFullName,
    setPreviousPage,
    removePreviousPage,
    getPreviousPage,
  }
}


export default SessionService;
