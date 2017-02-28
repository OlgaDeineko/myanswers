import config, {apiUrl, mainDomian} from '../config';

function SessionService($window) {
  "ngInject";

  let create = (accessToken, subdomain, role, fullName) => {
    $window.localStorage['access_token'] = accessToken;
    $window.localStorage['client_subdomain'] = subdomain;
    $window.localStorage['role'] = role;
    $window.localStorage['full_name'] = fullName;
  }

  let hasToken = () => {
    return !!$window.localStorage['access_token'];
  }

  let geApiUrl = () => {
    let userSubdomain = $window.localStorage['client_subdomain'];
    let result = apiUrl;
    if(userSubdomain){
      result = `http://${userSubdomain}.${mainDomian}/api/v1`
    }
    return result;
  }

  let getToken = () => {
    return $window.localStorage['access_token'];
  }

  let getRole = () => {
    return $window.localStorage['role'];
  }

  let getSubdomain = () => {
    return $window.localStorage['client_subdomain'];
  }

  let getFullName = () => {
    return $window.localStorage['full_name'];
  }

  let destroy = () => {
    $window.localStorage.removeItem('access_token');
    $window.localStorage.removeItem('client_subdomain');
    $window.localStorage.removeItem('role');
    $window.localStorage.removeItem('full_name');
  }

  return {
    create,
    hasToken,
    destroy,
    getSubdomain,
    getToken,
    getRole,
    geApiUrl,
    getFullName,
  }
}


export default SessionService;
