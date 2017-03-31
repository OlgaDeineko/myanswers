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

    $http({
      method: 'GET',
      url: `${SessionService.geApiUrl()}/categories`,
    }).then(result => {
      self.categories = result.data.data.map(categoryHelper.responseToData);
      self.deferred.resolve(self.categories);
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
    return $http({
      method: 'POST',
      url: `${SessionService.geApiUrl()}/categories`,
      data: categoryHelper.dataToRequest(newCategory)
    }).then(result => {
      self.categories=null;
      $rootScope.$broadcast('updateCategories');
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
    return $http({
      method: 'PUT',
      url: `${SessionService.geApiUrl()}/categories/${category.id}`,
      data: categoryHelper.dataToRequest(category)
    }).then(result => {
      self.categories=null;
      $rootScope.$broadcast('updateCategories');
      return categoryHelper.responseToData(result.data.data);
    });
  };

  let changeOrder = (category) => {
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
    remove,
    changeOrder
  }
}

export default CategoryService;
