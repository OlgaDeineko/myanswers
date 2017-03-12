function CategoryService($http, $q, $rootScope, spinnerFactory, categoryHelper, SessionService) {
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

    spinnerFactory.start();
    $http({
      method: 'GET',
      url: `${SessionService.geApiUrl()}/categories`,
    }).then(result => {
      self.categories = result.data.data.map(categoryHelper.responseToData);
      self.deferred.resolve(self.categories);
      spinnerFactory.end();
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
    spinnerFactory.start();
    return $http({
      method: 'POST',
      url: `${SessionService.geApiUrl()}/categories`,
      data: categoryHelper.dataToRequest(newCategory)
    }).then(result => {
      self.categories=null;
      $rootScope.$broadcast('updateCategories');
      spinnerFactory.end();
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
    spinnerFactory.start();
    return $http({
      method: 'PUT',
      url: `${SessionService.geApiUrl()}/categories/${category.id}`,
      data: categoryHelper.dataToRequest(category)
    }).then(result => {
      self.categories=null;
      $rootScope.$broadcast('updateCategories');
      spinnerFactory.end();
      return categoryHelper.responseToData(result.data.data);
    });
  };
  let update2 = (category) => {
    // spinnerFactory.start();
    return $http({
      method: 'PUT',
      url: `${SessionService.geApiUrl()}/categories/${category.id}`,
      data: categoryHelper.dataToRequest(category)
    }).then(result => {
      // $rootScope.$broadcast('updateCategories');
      // return categoryHelper.responseToData(result.data.data);
    });
  };
  
  /**
   * Remove category
   * @param {number} categoryId - category ID
   * @returns {Promise.<{Category}>}
   */
  let remove = (categoryId) => {
    let self = this;
    spinnerFactory.start();
    return $http({
      method: 'DELETE',
      url: `${SessionService.geApiUrl()}/categories/${categoryId}`,
    }).then(result => {
      self.categories=null;
      $rootScope.$broadcast('updateCategories');
      spinnerFactory.end();
      return result.data.data
    });
  };

  return {
    getAll,
    create,
    update,
    remove,
    update2
  }
}

export default CategoryService;
