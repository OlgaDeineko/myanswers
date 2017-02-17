import config, {apiUrl, mainDomian} from '../config';

function SessionService($window) {
  "ngInject";

  let create = (accessToken, subdomain) => {
    $window.sessionStorage['access_token'] = accessToken;
    $window.sessionStorage['client_subdomain'] = subdomain;
  }

  let hasToken = () => {
    return !!$window.sessionStorage['access_token'];
  }

  let geApiUrl = () => {
    let userSubdomain = $window.sessionStorage['client_subdomain'];
    let result = apiUrl;
    if(userSubdomain){
      result = `http://${userSubdomain}.${mainDomian}/api/v1`
    }
    return result;
  }

  let getToken = () => {
    return $window.sessionStorage['access_token'];
  }

  let getSubdomain = () => {
    return $window.sessionStorage['client_subdomain'];
  }

  let destroy = () => {
    $window.sessionStorage.removeItem('access_token');
    $window.sessionStorage.removeItem('client_subdomain');
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
