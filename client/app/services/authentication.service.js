import config, {apiUrl} from '../config';

function AuthenticationService(SessionService, PermPermissionStore, $http){
  "ngInject";

  let login = (user) => {
    return $http({
      method: 'POST',
      url: `${apiUrl}/auth/login`,
      data: user
    }).then(result => {
      let role = 'ADMIN'// result.data.data.role;
      SessionService.create(result.data.data.access_token, result.data.data.subdomain, role);
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
    return SessionService.hasToken() && !!SessionService.getSubdomain();
  }

  let initPermission = () => {
    PermPermissionStore.definePermission('anonymous', () => {
      return !SessionService.hasToken();
    });
    PermPermissionStore.definePermission('user', () => {
      return SessionService.hasToken();
    });
  }

  let logOut = () => {
    SessionService.destroy();
  }


  return {
    register,
    login,
    logOut,
    isAuthenticated,
    initPermission
  }
}

export default AuthenticationService;
