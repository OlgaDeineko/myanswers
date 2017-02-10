import config, {apiUrl} from '../config';

function AuthenticationService($window, $http){
  "ngInject";

  let initialize = () => {
    if ($window.sessionStorage['TokenInfo']) {
      tokenInfo = JSON.parse($window.sessionStorage['TokenInfo']);
    } else {
      console.info('notAuth');
    }
  }

  let login = (user) => {
    return $http({
      method: 'POST',
      url: `${apiUrl}/auth/login`,
      data: user
    });
  }

  let register = (newUser) => {
    return $http({
      method: 'POST',
      url: `${apiUrl}/auth/register`,
      data: newUser
    });
  }

  return {
    initialize,
    register,
    login
  };
}

export default AuthenticationService;
