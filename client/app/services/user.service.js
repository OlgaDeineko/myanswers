function UserService($http, PermPermissionStore, userHelper, SessionService) {
  "ngInject";
  this.user = null;

  /**
   * login
   * @param {User} userData
   * @returns {Promise<void>}
   */
  let login = (userData) => {
    return $http({
      method: 'POST',
      url: `${SessionService.geApiUrl()}/auth/login`,
      data: userData
    }).then((result) => {
      let user = userHelper.responseToData(result.data.data);

      SessionService.token.data = result.data.data.access_token;
      SessionService.subdomain.data = userData.subdomain;

      this.user = {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        roleName: user.roleName
      };

      SessionService.user.data = this.user;
    });
  };

  /**
   * logout
   */
  let logOut = () => {
    SessionService.token.remove();
    SessionService.user.remove();
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
   * get user full name
   * @returns {string}
   */
  let getFullName = () => {
    if (!this.user) return;
    return `${this.user.first_name} ${this.user.last_name}`
  };

  /**
   * get user access token
   * @returns {string}
   */
  let getToken = () => {
    return SessionService.token.data;
  };

  /**
   * get user role
   * @returns {string|void}
   */
  let getRole = () => {
    if (!this.user) return;
    return this.user.roleName;
  };

  /**
   * get user id
   * @returns {string|void}
   */
  let getId = () => {
    if (!this.user) return;
    return this.user.id;
  };

  /**
   * get user email
   * @returns {string|void}
   */
  let getEmail = () => {
    if (!this.user) return;
    return this.user.email;
  };

  /**
   * is authorized
   * @returns {boolean}
   */
  let isLogin = () => {
    return !!getToken();
  };

  /**
   * get current user
   * @returns {Promise}
   */
  let getCurrentUser = () => {
    //TODO: need call to server(don't implemented)
    return new Promise((resolve, reject) => {
      resolve(this.user);
    })
  };

  /**
   * read user from local storage
   */
  let getUserFromStorage = () => {
    this.user = SessionService.user.data
  };

  //////////////////////////////////////////////////////////////////////////////////////////
  /**
   * Init user role permissions
   */
  let initPermission = () => {
    PermPermissionStore.definePermission('any', () => {
      return true;
    });
    PermPermissionStore.definePermission('anonymous', () => {
      return !isLogin();
    });
    PermPermissionStore.definePermission('user', () => {
      return getRole() == 'user' || getRole() == 'editor';
    });
    PermPermissionStore.definePermission('admin', () => {
      return getRole() == 'admin' || getRole() == 'ADMIN';
    });
    PermPermissionStore.definePermission('visitor', () => {
      return getRole() == 'visitor';
    });
    PermPermissionStore.definePermission('superAdmin', () => {
      return getRole() == 'Super Admin';
    });
    PermPermissionStore.definePermission('contributor', () => {
      return getRole() == 'contributor';
    });
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
    login,
    logOut,
    register,
    getFullName,
    getToken,
    getRole,
    getId,
    getEmail,
    isLogin,
    getCurrentUser,
    getUserFromStorage,
    initPermission,

    forgotPassword,
    resetPassword,
    sendActivation,
  }
}

export default UserService;
