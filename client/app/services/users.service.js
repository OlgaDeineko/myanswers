import config, {apiUrl} from '../config';
import userHelper from '../helpers/user';

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
      self.users =  result.data.data.map(userHelper.responseToData);
      return self.users;
    });
  };

  let create = (newUser) => {
    return $http({
      method: 'POST',
      url: `${SessionService.geApiUrl()}/users`,
      data: userHelper.dataToRequest(newUser)
    }).then(result => {
      self.users=null;
      $rootScope.$broadcast('updateUsers');
      return userHelper.responseToData(result.data.data);
    });
  };

  let update = (user) => {
    return $http({
      method: 'PUT',
      url: `${SessionService.geApiUrl()}/users/${user.id}`,
      data: userHelper.dataToRequest(user)
    }).then(result => {
      self.users=null;
      $rootScope.$broadcast('updateUsers');
      return userHelper.responseToData(result.data.data);
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
