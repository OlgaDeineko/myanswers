function UsersService($http, $q, $rootScope, userHelper, SessionService) {
  "ngInject";
  this.users = null;

  /**
   * Get all users
   * @params {boolean} update - force update
   * @returns {Promise.<User[]>}
   */
  let getAll = (update) => {
    if (this.users && !update) {
      return new Promise((resolve, reject) => {
        resolve(this.users);
      })
    }

    if (this.deferred) return this.deferred.promise;
    this.deferred = $q.defer();

    $http({
      method: 'GET',
      url: `${SessionService.geApiUrl()}/users`,
    }).then((result) => {
      this.users = result.data.data.map(userHelper.responseToData);
      this.deferred.resolve(this.users);
      delete this.deferred;
    });
    return this.deferred.promise;
  };

  /**
   * Create user
   * @param {object} newUser - new user
   * @returns {Promise.<User>}
   */
  let create = (newUser) => {
    return $http({
      method: 'POST',
      url: `${SessionService.geApiUrl()}/users`,
      data: userHelper.dataToRequest(newUser)
    }).then((result) => {
      this.users = null;
      $rootScope.$broadcast('updateUsers');
      return userHelper.responseToData(result.data.data);
    });
  };

  /**
   * Update user
   * @param {User} user - new faq
   * @returns {Promise.<User>}
   */
  let update = (user) => {
    return $http({
      method: 'PUT',
      url: `${SessionService.geApiUrl()}/users/${user.id}`,
      data: userHelper.dataToRequest(user)
    }).then((result) => {
      this.users = null;
      $rootScope.$broadcast('updateUsers');
      return userHelper.responseToData(result.data.data);
    });
  };

  /**
   * Remove user
   * @param {number} userId - faq ID
   * @returns {Promise.<User>}
   */
  let remove = (userId) => {
    return $http({
      method: 'DELETE',
      url: `${SessionService.geApiUrl()}/users/${userId}`,
    }).then((result) => {
      this.users = null;
      $rootScope.$broadcast('updateUsers');
      return result.data.data;
    });
  };

  return {
    getAll,
    create,
    update,
    remove
  }
}

export default UsersService;
