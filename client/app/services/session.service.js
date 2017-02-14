function SessionService($window) {
  "ngInject";

  let id, userId, userRole;

  let create = (sessionId/*, userId, userRole*/) => {
    id = sessionId;
    // this.userId = userId;
    // this.userRole = userRole;
    $window.sessionStorage['access_token'] = accessToken;
  };

  let destroy = () => {
    id = null;
    // this.userId = null;
    // this.userRole = null;
  };

  // let save = (accessToken, refreshToken) => {
  //   $window.sessionStorage['access_token'] = accessToken;
  //   $window.sessionStorage['refresh_token'] = refreshToken;
  //   $http.defaults.headers['Bearer'] = $window.sessionStorage['access_token'];
  //   setUser(true);
  // }

  return{
    create,
    destroy
  }
}


export default SessionService;
