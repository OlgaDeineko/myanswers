function ArticleService($http, $q, $rootScope, faqHelper, fileHelper, SessionService) {
  "ngInject";
  this.articles = null;
  this.articleCounts = [{
    name: "ALL",
    code: "all",
    counts: 0
  }];

  /**
   * Get all articles(FAQ)
   * @params {boolean} update - need updated
   * @returns {Promise.<Article[]>}
   */
  let getAll = (update) => {
    if (this.articles && !update) {
      return new Promise((resolve) => {
        resolve(this.articles);
      })
    }

    if (this.deferred) return this.deferred.promise;
    this.deferred = $q.defer();

    $http({
      method: 'GET',
      url: `${SessionService.geApiUrl()}/faq`,
    }).then((result) => {
      this.articles = result.data.data.map(faqHelper.responseToData);
      this.articleCounts = faqHelper.countsTypes(this.articles);
      this.deferred.resolve(this.articles);
      delete this.deferred;
    });
    return this.deferred.promise;
  };

  /**
   * Get article(FAQ) by id
   * @param {number} faqId
   * @param {boolean} isAlgolia
   * @returns {Promise.<Article>}
   */
  let getById = (faqId, isAlgolia) => {
    if(isAlgolia){
      return getByAlgoliaId(faqId);
    }
    return $http({
      method: 'GET',
      url: `${SessionService.geApiUrl()}/faq/${faqId}`,
    }).then((result) => {
      return faqHelper.responseToData(result.data.data);
    });
  };

  /**
   * Get article(FAQ) by algolia id
   * @param {number} algoliaId
   * @returns {Promise.<Article>}
   */
  let getByAlgoliaId = (algoliaId) => {
    return $http({
      method: 'GET',
      url: `${SessionService.geApiUrl()}/faq/algolia/${algoliaId}`,
    }).then((result) => {
      return faqHelper.responseToData(result.data.data);
    });
  };

  /**
   * Create article(FAQ)
   * @param {Article} faq - new faq
   * @returns {Promise.<Article>}
   */
  let create = (faq) => {
    return $http({
      method: 'POST',
      url: `${SessionService.geApiUrl()}/faq`,
      data: faqHelper.dataToRequest(faq)
    }).then((result) => {
      this.articles = null;
      $rootScope.$broadcast('updateArticles');
      return faqHelper.responseToData(result.data.data);
    });
  };

  /**
   * Update article(FAQ)
   * @param {Article} faq - new faq
   * @returns {Promise.<Article>}
   */
  let update = (faq) => {
    return $http({
      method: 'PUT',
      url: `${SessionService.geApiUrl()}/faq/${faq.id}`,
      data: faqHelper.dataToRequest(faq)
    }).then((result) => {
      this.articles = null;
      $rootScope.$broadcast('updateArticles');
      return faqHelper.responseToData(result.data.data);
    });
  };

  /**
   * Remove article(FAQ)
   * @param {number} faqId - faq ID
   * @returns {Promise.<Article>}
   */
  let remove = (faqId) => {
    return $http({
      method: 'DELETE',
      url: `${SessionService.geApiUrl()}/faq/${faqId}/trash`,
    }).then((result) => {
      this.articles = null;
      $rootScope.$broadcast('updateArticles');
      return result.data.data
    });
  };

  /**
   * save article attachments
   * @param {object[]} files
   * @param {number} faqId - faq ID
   */
  let saveAttachments = (files, faqId) => {
    return $http({
      method: 'POST',
      url: `${SessionService.geApiUrl()}/faq/${faqId}/attachments`,
      data: {files: files.map(fileHelper.dataToRequest)}
    }).then((result) => {
      return result.data.data.map(fileHelper.responseToData);
    });
  };

  /**
   * get articles counts
   * @returns {object[]<{name: string, code: string, counts: number}>} counts
   */
  let getCounts = () => {
    return this.articleCounts;
  };

  /**
   * change order faq
   * @param {object} oder
   * @param {number} oder.id
   * @param {number} oder.order
   */
  let changeOrder = (oder) => {
    return $http({
      method: 'POST',
      url: `${SessionService.geApiUrl()}/faq/sortOrder`,
      data: oder
    });
  };

  /**
   * get most viewed faq
   * @param {number} categoryId
   * @param {number} period - days
   */
  let getMostViewed = (categoryId, period) => {
    return $http({
      method: 'GET',
      url: `${SessionService.geApiUrl()}/faq/mostViewed`,
      params: {
        categoryId: categoryId,
        period: period
      }
    }).then((result) => {
      return result.data.map(faqHelper.responseToData);
    });
  };

  return {
    getAll,
    getById,
    create,
    update,
    remove,
    getByAlgoliaId,
    saveAttachments,
    getCounts,
    changeOrder,
    getMostViewed,
  }
}

export default ArticleService;
