function SessionService($window) {
  "ngInject";

  let create = (accessToken, subdomain) => {
    $window.sessionStorage['access_token'] = accessToken;
    $window.sessionStorage['client_subdomain'] = subdomain;
  }

  let hasToken = () => {
    return !!$window.sessionStorage['access_token'];
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

  return{
    create,
    hasToken,
    destroy,
    getSubdomain,
    getToken
  }
}


export default SessionService;
