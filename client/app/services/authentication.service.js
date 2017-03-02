import config, {apiUrl} from '../config';
import userHelper from '../helpers/user';

function AuthenticationService(SessionService, PermPermissionStore, $http){
  "ngInject";

  let login = (user, subdomen) => {
    return $http({
      method: 'POST',
      url: `${apiUrl}/auth/login`,
      data: user
    }).then(result => {
      let role = 'ADMIN'// result.data.data.role;
      let user = userHelper.responseToData(result.data.data);
      SessionService.create(
        user.access_token,
        subdomen,
        role,
        user.fullName
      );
      return user;
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

  let forgotPassword = (email) => {
    return $http({
      method: 'POST',
      url: `${apiUrl}/auth/requestPasswordReset`,
      data: {"email": email}
    });
  }

  let resetPassword = (hash, pass) => {
    return $http({
      method: 'POST',
      url: `${apiUrl}/auth/resetPassword?resetToken=${hash}`,
      data: {"new_password": pass}
    });
  }

  let sendActivation = (hash) => {
    return $http({
      method: 'GET',
      url: `${apiUrl}/auth/verifyEmail?token=${hash}`
    });
  }


  return {
    register,
    login,
    logOut,
    isAuthenticated,
    initPermission,
    forgotPassword,
    resetPassword,
    sendActivation,
  }
}

export default AuthenticationService;
