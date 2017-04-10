function ArticleService($http, $q, $rootScope, faqHelper, fileHelper, SessionService) {
  "ngInject";
  this.articles = null;

  /**
   * Get all articles(FAQ)
   * @params {boolean} update - need updated
   * @returns {Promise.<Article[]>}
   */
  let getAll = (update) => {
    let self = this;

    if (this.articles && !update) {
      return new Promise((resolve) => {
        resolve(self.articles);
      })
    }

    if (self.deferred) return self.deferred.promise;
    this.deferred = $q.defer();

    $http({
      method: 'GET',
      url: `${SessionService.geApiUrl()}/faq`,
    }).then((result) => {
      self.articles = result.data.data.map(faqHelper.responseToData);
      self.deferred.resolve(self.articles);
      delete self.deferred;
    });
    return self.deferred.promise;
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
    let self = this;
    return $http({
      method: 'POST',
      url: `${SessionService.geApiUrl()}/faq`,
      data: faqHelper.dataToRequest(faq)
    }).then((result) => {
      self.articles = null;
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
    let self = this;
    return $http({
      method: 'PUT',
      url: `${SessionService.geApiUrl()}/faq/${faq.id}`,
      data: faqHelper.dataToRequest(faq)
    }).then((result) => {
      self.articles = null;
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
    let self = this;
    return $http({
      method: 'DELETE',
      url: `${SessionService.geApiUrl()}/faq/${faqId}/trash`,
    }).then((result) => {
      self.articles = null;
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

  return {
    getAll,
    getById,
    create,
    update,
    remove,
    getByAlgoliaId,
    saveAttachments,
  }
}

export default ArticleService;
