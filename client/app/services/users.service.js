import config, {apiUrl} from '../config';

function UsersService($http, $rootScope, SessionService) {
  "ngInject";
  let users = null;

  let getAll = (update) => {
    let self = this;
    if(self.users && !update){
      return new Promise((resolve, reject) => {
        resolve(self.users);
      })
    }

    return $http({
      method: 'GET',
      url: `${SessionService.geApiUrl()}/users`,
    }).then(result => {
      self.users = result.data.data;
      return result.data.data
    });
  };

  let create = (newUser) => {
    return $http({
      method: 'POST',
      url: `${SessionService.geApiUrl()}/users`,
      data: newUser
    }).then(result => {
      self.users=null;
      $rootScope.$broadcast('updateUsers');
      return result.data.data || result.data
    });
  };

  let update = (user) => {
    return $http({
      method: 'PUT',
      url: `${SessionService.geApiUrl()}/users/${user.id}`,
      data: user
    }).then(result => {
      self.users=null;
      $rootScope.$broadcast('updateUsers');
      return result.data.data
    });
  };

  let remove = (userId) => {
    // return $http({
    //   method: 'DELETE',
    //   url: `${SessionService.geApiUrl()}/users/${userId}`,
    // }).then(result => {
    //   self.users = null;
    //   $rootScope.$broadcast('updateUsers');
    //   return result.data.data
    // });
  };

  return {
    getAll,
    create,
    update,
    remove
  }
}

export default UsersService;
