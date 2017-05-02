function CategoryService($http, $q, $rootScope, categoryHelper, SessionService) {
  "ngInject";
  this.categories = null;

  /**
   * Get all categories
   * @params {boolean} update - need updated
   * @returns {Promise.<Category[]>}
   */
  let getAll = (update) => {
    if(this.categories && !update){
      return new Promise((resolve, reject) => {
        resolve(this.categories);
      })
    }

    if(this.deferred) return this.deferred.promise;
    this.deferred = $q.defer();

    $http({
      method: 'GET',
      url: `${SessionService.geApiUrl()}/categories`,
    }).then(result => {
      this.categories = result.data.data.map(categoryHelper.responseToData);
      this.deferred.resolve(this.categories);
      delete this.deferred;
    });
    return this.deferred.promise;
  };

  /**
   * Get category by id
   * @params {number} update - need updated
   * @returns {Promise.<Category>}
   */
  let getById = (categoryId) => {
    return $http({
      method: 'GET',
      url: `${SessionService.geApiUrl()}/categories/${categoryId}`,
    }).then(result => {
      return categoryHelper.responseToData(result.data.data);
    });
  };

  /**
   * Create category
   * @param {Category} newCategory - new category
   * @returns {Promise.<{Category}>}
   */
  let create = (newCategory) => {
    return $http({
      method: 'POST',
      url: `${SessionService.geApiUrl()}/categories`,
      data: categoryHelper.dataToRequest(newCategory)
    }).then(result => {
      this.categories=null;
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
    return $http({
      method: 'PUT',
      url: `${SessionService.geApiUrl()}/categories/${category.id}`,
      data: categoryHelper.dataToRequest(category)
    }).then(result => {
      this.categories=null;
      $rootScope.$broadcast('updateCategories');
      return categoryHelper.responseToData(result.data.data);
    });
  };

  /**
   * change order category
   * @param {object} oder
   * @param {number} oder.id
   * @param {number} oder.order
   */
  let changeOrder = (oder) => {
    return $http({
      method: 'POST',
      url: `${SessionService.geApiUrl()}/categories/sortOrder`,
      data: oder
    });
  };

  /**
   * Remove category
   * @param {number} categoryId - category ID
   * @returns {Promise.<{Category}>}
   */
  let remove = (categoryId) => {
    return $http({
      method: 'DELETE',
      url: `${SessionService.geApiUrl()}/categories/${categoryId}`,
    }).then(result => {
      this.categories=null;
      $rootScope.$broadcast('updateCategories');
      return result.data.data
    });
  };

  return {
    getAll,
    getById,
    create,
    update,
    remove,
    changeOrder
  }
}

export default CategoryService;
