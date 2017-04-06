function UsersService($http, $q, $rootScope, userHelper, SessionService) {
  "ngInject";
  this.users = null;

  /**
   * Get all users
   * @returns {Promise.<User[]>}
   */
  let getAll = (update) => {
    let self = this;

    if (self.users && !update) {
      return new Promise((resolve, reject) => {
        resolve(self.users);
      })
    }

    if (self.deferred) return self.deferred.promise;
    this.deferred = $q.defer();

    $http({
      method: 'GET',
      url: `${SessionService.geApiUrl()}/users`,
    }).then((result) => {
      self.users = result.data.data.map(userHelper.responseToData);
      self.deferred.resolve(self.users);
      delete self.deferred;
    });
    return self.deferred.promise;
  };

  /**
   * Create user
   * @param {object} newUser - new faq
   * @returns {Promise.<User>}
   */
  let create = (newUser) => {
    let self = this;
    return $http({
      method: 'POST',
      url: `${SessionService.geApiUrl()}/users`,
      data: userHelper.dataToRequest(newUser)
    }).then((result) => {
      self.users = null;
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
      self.users = null;
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
      self.users = null;
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
