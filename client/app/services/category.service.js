import config, {apiUrl} from '../config';

function CategoryService($http, $q, $rootScope, SessionService) {
  "ngInject";
  let categories = null;

  let getAll = (update) => {
    let self = this;
    if(this.categories && !update){
      return new Promise((resolve, reject) => {
        resolve(self.categories);
      })
    }

    if(self.deferred) return self.deferred.promise;
    this.deferred = $q.defer();

    $rootScope.loading.push({method: 'get'});
    $http({
      method: 'GET',
      url: `${SessionService.geApiUrl()}/categories`,
    }).then(result => {
      self.categories = result.data.data;
      self.deferred.resolve(result.data.data);
      $rootScope.loading.splice(0, 1);
      delete self.deferred;
    });
    return self.deferred.promise;
  };

  let create = (newCategory) => {
    let self = this;
    $rootScope.loading.push({method: 'get'});
    return $http({
      method: 'POST',
      url: `${SessionService.geApiUrl()}/categories`,
      data: newCategory
    }).then(result => {
      self.categories=null;
      $rootScope.$broadcast('updateCategories');
      $rootScope.loading.splice(0, 1);
      return result.data.data || result.data
    });
  };

  let update = (category) => {
    let self = this;
    $rootScope.loading.push({method: 'get'});
    return $http({
      method: 'PUT',
      url: `${SessionService.geApiUrl()}/categories/${category.id}`,
      data: category
    }).then(result => {
      self.categories=null;
      $rootScope.$broadcast('updateCategories');
      $rootScope.loading.splice(0, 1);
      return result.data.data
    });
  };

  let remove = (categoryId) => {
    let self = this;
    $rootScope.loading.push({method: 'get'});
    return $http({
      method: 'DELETE',
      url: `${SessionService.geApiUrl()}/categories/${categoryId}`,
    }).then(result => {
      self.categories=null;
      $rootScope.$broadcast('updateCategories');
      $rootScope.loading.splice(0, 1);
      return result.data.data
    });
  };

  return {
    getAll,
    create,
    update,
    remove
  }
}

export default CategoryService;
