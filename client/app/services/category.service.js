function CategoryService($http, $q, $rootScope, categoryHelper, SessionService) {
  "ngInject";
  let categories = null;

  /**
   * Get all categories
   * @params {boolean} update - need updated
   * @returns {Promise.<Category[]>}
   */
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
      self.categories = result.data.data.map(categoryHelper.responseToData);
      self.deferred.resolve(self.categories);
      $rootScope.loading.splice(0, 1);
      delete self.deferred;
    });
    return self.deferred.promise;
  };

  /**
   * Create category
   * @param {Category} newCategory - new category
   * @returns {Promise.<{Category}>}
   */
  let create = (newCategory) => {
    let self = this;
    $rootScope.loading.push({method: 'get'});
    return $http({
      method: 'POST',
      url: `${SessionService.geApiUrl()}/categories`,
      data: categoryHelper.dataToRequest(newCategory)
    }).then(result => {
      self.categories=null;
      $rootScope.$broadcast('updateCategories');
      $rootScope.loading.splice(0, 1);
      return categoryHelper.responseToData(result.data.data);
    });
  };

  /**
   * Update category
   * @param {Category} category - category
   * @returns {Promise.<{Category}>}
   */
  let update = (category) => {
    let self = this;
    $rootScope.loading.push({method: 'get'});
    return $http({
      method: 'PUT',
      url: `${SessionService.geApiUrl()}/categories/${category.id}`,
      data: categoryHelper.dataToRequest(category)
    }).then(result => {
      self.categories=null;
      $rootScope.$broadcast('updateCategories');
      $rootScope.loading.splice(0, 1);
      return categoryHelper.responseToData(result.data.data);
    });
  };
  
  /**
   * Remove category
   * @param {number} categoryId - category ID
   * @returns {Promise.<{Category}>}
   */
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
