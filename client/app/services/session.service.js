import config, {apiUrl, mainDomian} from '../config';

function SessionService($window) {
  "ngInject";

  let create = (accessToken, subdomain) => {
    $window.localStorage['access_token'] = accessToken;
    $window.localStorage['client_subdomain'] = subdomain;
  }

  let hasToken = () => {
    return !!$window.localStorage['access_token'];
  }

  let geApiUrl = () => {
    let userSubdomain = $window.localStorage['client_subdomain'] || 'maxii2';
    let result = apiUrl;
    if(userSubdomain){
      result = `http://${userSubdomain}.${mainDomian}/api/v1`
    }
    return result;
  }

  let getToken = () => {
    return $window.localStorage['access_token'];
  }

  let getSubdomain = () => {
    return $window.localStorage['client_subdomain'] || 'maxii2';
  }

  let destroy = () => {
    $window.localStorage.removeItem('access_token');
    $window.localStorage.removeItem('client_subdomain');
  }

  return {
    create,
    hasToken,
    destroy,
    getSubdomain,
    getToken,
    geApiUrl
  }
}


export default SessionService;
