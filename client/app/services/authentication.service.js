function AuthenticationService($window){
  "ngInject";

  let initialize = () => {
    if ($window.sessionStorage['TokenInfo']) {
      tokenInfo = JSON.parse($window.sessionStorage['TokenInfo']);
    }else{
      console.info('notAuth');
    }
  }

  return { initialize };
}

export default AuthenticationService;
