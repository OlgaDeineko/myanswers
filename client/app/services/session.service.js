function SessionService($window) {
  "ngInject";

  let create = (accessToken) => {
    $window.sessionStorage['access_token'] = accessToken;
  }

  let hasToken = () => {
    return $window.sessionStorage['access_token'];
  }

  let destroy = () => {
    $window.sessionStorage.removeItem('access_token');
  }

  return{
    create,
    hasToken,
    destroy
  }
}


export default SessionService;
