
function AuthenticationService($rootScope, userHelper, SessionService, PermPermissionStore, $http) {
  "ngInject";

  let login = (user, subdomain) => {
    $rootScope.loading.push({method: 'get'});
    return $http({
      method: 'POST',
      url: `${SessionService.geApiUrl()}/auth/login`,
      data: user
    }).then(result => {
      // let role = result.data.data.role;
      $rootScope.loading.splice(0, 1);
      let user = userHelper.responseToData(result.data.data);
      SessionService.create(
        user.access_token,
        subdomain,
        user.role,
        user.fullName
      );
      return user;
    });
  }

  let register = (newUser) => {
    $rootScope.loading.push({method: 'get'});
    return $http({
      method: 'POST',
      url: `${SessionService.geApiUrl()}/auth/register`,
      data: newUser
    }).then((res) => {
      $rootScope.loading.splice(0, 1);
      return res;
    });
  }

  let isAuthenticated = () => {
    return SessionService.hasToken();
  }

  let initPermission = () => {
    PermPermissionStore.definePermission('any', () => {
      return true;
    });
    PermPermissionStore.definePermission('anonymous', () => {
      return !SessionService.hasToken();
    });
    PermPermissionStore.definePermission('user', () => {
      return SessionService.getRole() == 'user';
    });
    PermPermissionStore.definePermission('admin', () => {
      return SessionService.getRole() == 'admin' || SessionService.getRole() == 'ADMIN';
    });
    PermPermissionStore.definePermission('visitor', () => {
      return SessionService.getRole() == 'visitor';
    });
    PermPermissionStore.definePermission('superAdmin', () => {
      return SessionService.getRole() == 'Super Admin';
    });
  }

  let logOut = () => {
    SessionService.destroy();
  }

  let forgotPassword = (email) => {
    return $http({
      method: 'POST',
      url: `${SessionService.geApiUrl()}/auth/requestPasswordReset`,
      data: {"email": email}
    });
  }

  let resetPassword = (hash, pass) => {
    return $http({
      method: 'POST',
      url: `${SessionService.geApiUrl()}/auth/resetPassword?resetToken=${hash}`,
      data: {"new_password": pass}
    });
  }

  let sendActivation = (hash) => {
    return $http({
      method: 'GET',
      url: `${SessionService.geApiUrl()}/auth/verifyEmail?token=${hash}`
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
