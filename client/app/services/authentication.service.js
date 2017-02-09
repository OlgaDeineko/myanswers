function AuthenticationService($window, $http){
  "ngInject";

  let initialize = () => {
    if ($window.sessionStorage['TokenInfo']) {
      tokenInfo = JSON.parse($window.sessionStorage['TokenInfo']);
    }else{
      console.info('notAuth');
    }
  }

  let register = (newUser) => {
    return $http({
      method: 'POST',
      url: 'http://52.26.147.247/api/auth/register',
      data: newUser,
    });
  }

  let login = (user) => {
    return $http({
      method: 'POST',
      url: 'http://52.26.147.247/api/auth/login',
      data: user,
    });
  }

  return { initialize, register, login };
}

export default AuthenticationService;
