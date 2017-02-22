import config, {apiUrl} from '../config';

function CategoryService($http, SessionService) {
  "ngInject";

  let getAll = () => {
    // return $http({
    //   method: 'GET',
    //   url: `${SessionService.geApiUrl()}/users`,
    // }).then(result => {
    //   console.log(result);
    //   return result.data.data
    // });

    return new Promise((resolve, reject) => {
      resolve([{
        "id": "78FsrnMdYHAcJEWUPo4gQe",
        "email": "oleg.skiba@yanpix.com",
        "username": "oleg.skiba@yanpix.com",
        "first_name": "Oleg",
        "last_name": "Skiba",
        "role": ["visitor"],
        "subdomains": ["skiba"]
      }, {
        "id": "5G0kKHSP10OICd4MRAr6cO",
        "email": "test@test.com",
        "username": "test@test.com",
        "first_name": "Test",
        "last_name": "User",
        "role": ["user"],
        "subdomains": ["skiba"]
      }]);
    })
  };

  let create = (newUser) => {
    return $http({
      method: 'POST',
      url: `${SessionService.geApiUrl()}/users`,
      data: newUser
    }).then(result => {
      console.log(result);
      return result.data.data || result.data
    });
  };

  let update = (user) => {
    // return $http({
    //   method: 'PUT',
    //   url: `${SessionService.geApiUrl()}/users/${user.id}`,
    //   data: user
    // }).then(result => {
    //   console.log(result);
    //   return result.data.data
    // });
  };

  let remove = (userId) => {
    // return $http({
    //   method: 'DELETE',
    //   url: `${SessionService.geApiUrl()}/users/${userId}`,
    // }).then(result => {
    //   console.log(result);
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

export default CategoryService;
