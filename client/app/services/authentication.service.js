import config, {apiUrl} from '../config';

function AuthenticationService(SessionService, $http){
  "ngInject";

  let login = (user) => {
    return $http({
      method: 'POST',
      url: `${apiUrl}/auth/login`,
      data: user
    }).then(result => {
      let role = 'admin';
      SessionService.create(result.data.data.access_token, role);
      return result;
    });
  }

  let register = (newUser) => {
    return $http({
      method: 'POST',
      url: `${apiUrl}/auth/register`,
      data: newUser
    });
  }

  let isAuthenticated = () => {
    return !!Session.userId;
  }


  // let isAuthorized = (authorizedRoles) => {
  //   if (!angular.isArray(authorizedRoles)) {
  //     authorizedRoles = [authorizedRoles];
  //   }
  //   return (authService.isAuthenticated() &&
  //     authorizedRoles.indexOf(Session.userRole) !== -1);
  // }

  return {
    register,
    login,
    isAuthenticated,
    // isAuthorized
  }
}

export default AuthenticationService;
