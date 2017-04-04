function AuthenticationService($http, PermPermissionStore, userHelper, SessionService) {
  "ngInject";

  /**
   * login
   * @param {User} userData
   * @returns {Promise<Object>}
   */
  let login = (userData) => {
    return $http({
      method: 'POST',
      url: `${SessionService.geApiUrl()}/auth/login`,
      data: userData
    }).then((result) => {
      let user = userHelper.responseToData(result.data.data);
      SessionService.create(
        user.access_token,
        userData.subdomain,
        user.role,
        user.fullName
      );
      return user;
    });
  };

  /**
   * Register
   * @param {Object} newUser
   * @returns {Promise<Object>}
   */
  let register = (newUser) => {
    return $http({
      method: 'POST',
      url: `${SessionService.geApiUrl()}/auth/register`,
      data: newUser
    }).then((result) => {
      return result.data.data;
    });
  };

  /**
   * is authorized
   * @returns {boolean}
   */
  let isAuthenticated = () => {
    return SessionService.hasToken();
  };

  /**
   * Init user role permissions
   */
  let initPermission = () => {
    PermPermissionStore.definePermission('any', () => {
      return true;
    });
    PermPermissionStore.definePermission('anonymous', () => {
      return !SessionService.hasToken();
    });
    PermPermissionStore.definePermission('user', () => {
      return SessionService.getRole() == 'user' || SessionService.getRole() == 'editor';
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
    PermPermissionStore.definePermission('contributor', () => {
      return SessionService.getRole() == 'contributor';
    });
  };

  /**
   * logout
   */
  let logOut = () => {
    SessionService.destroy();
  };

  /**
   * send request to reset password
   * @param {string} email
   * @returns {Promise<Object>}
   */
  let forgotPassword = (email) => {
    return $http({
      method: 'POST',
      url: `${SessionService.geApiUrl()}/auth/requestPasswordReset`,
      data: {"email": email}
    }).then((result) => {
      return result.data.data;
    });
  };

  /**
   * reset password by token
   * @param hash - token
   * @param pass - new password
   * @returns {Promise<Object>}
   */
  let resetPassword = (hash, pass) => {
    return $http({
      method: 'POST',
      url: `${SessionService.geApiUrl()}/auth/resetPassword?resetToken=${hash}`,
      data: {"new_password": pass}
    }).then((result) => {
      return result.data.data;
    });
  };

  /**
   * Activate User
   * @param hash - token
   * @returns {Promise<Object>}
   */
  let sendActivation = (hash) => {
    return $http({
      method: 'GET',
      url: `${SessionService.geApiUrl()}/auth/verifyEmail?token=${hash}`
    }).then((result) => {
      return result.data.data;
    });
  };

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
