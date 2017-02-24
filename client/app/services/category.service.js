import config, {apiUrl} from '../config';

function CategoryService($http, $rootScope, SessionService) {
  "ngInject";
  let categories = null;

  let getAll = (update) => {
    let self = this;
    if(this.categories && !update){
      return new Promise((resolve, reject) => {
        resolve(self.categories);
      })
    }

    return $http({
      method: 'GET',
      url: `${SessionService.geApiUrl()}/categories`,
    }).then(result => {
      self.categories = result.data.data;
      return result.data.data
    });
  };

  let create = (newCategory) => {
    let self = this;
    return $http({
      method: 'POST',
      url: `${SessionService.geApiUrl()}/categories`,
      data: newCategory
    }).then(result => {
      self.categories=null;
      $rootScope.$broadcast('updateCategories');
      return result.data.data || result.data
    });
  };

  let update = (category) => {
    let self = this;
    return $http({
      method: 'PUT',
      url: `${SessionService.geApiUrl()}/categories/${category.id}`,
      data: category
    }).then(result => {
      self.categories=null;
      $rootScope.$broadcast('updateCategories');
      return result.data.data
    });
  };

  let remove = (categoryId) => {
    let self = this;
    return $http({
      method: 'DELETE',
      url: `${SessionService.geApiUrl()}/categories/${categoryId}`,
    }).then(result => {
      self.categories=null;
      $rootScope.$broadcast('updateCategories');
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
