function ArticleService($http, $q, $rootScope, faqHelper, SessionService, FilesService) {
  "ngInject";
  let articles = null;

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

    $rootScope.loading.push({method: 'get'});
    $http({
      method: 'GET',
      url: `${SessionService.geApiUrl()}/faq`,
    }).then((result) => {
      $rootScope.loading.splice(0, 1);
      self.articles = result.data.data.map(faqHelper.responseToData);
      self.deferred.resolve(self.articles);
      delete self.deferred;
    });
    return self.deferred.promise;
  };

  /**
   * Get article(FAQ) by id
   * @param {number} faqId
   * @returns {Promise.<Article>}
   */
  let getById = (faqId) => {
    $rootScope.loading.push({method: 'get'});
    return $http({
      method: 'GET',
      url: `${SessionService.geApiUrl()}/faq/${faqId}`,
    }).then((result) => {
      $rootScope.loading.splice(0, 1);
      console.log('ok')
      return faqHelper.responseToData(result.data.data);
    }).then((article) => {
      return FilesService.getAll('faq', article.id)
        .then((attachments) => {
          article.attachments = attachments;
          return article;
        });
    });
  };

  /**
   * Get article(FAQ) by algolia id
   * @param {number} algoliaId
   * @returns {Promise.<Article>}
   */
  let getByAlgoliaId = (algoliaId) => {
    $rootScope.loading.push({method: 'get'});
    return $http({
      method: 'GET',
      url: `${SessionService.geApiUrl()}/faq/algolia/${algoliaId}`,
    }).then((result) => {
      $rootScope.loading.splice(0, 1);
      return faqHelper.responseToData(result.data.data);
    }).then(article => {
      return FilesService.getAll('faq', article.id)
        .then((attachments) => {
          article.attachments = attachments;
          return article;
        });
    });
  };

  /**
   * Create article(FAQ)
   * @param {Article} faq - new faq
   * @returns {Promise.<{Article}>}
   */
  let create = (faq) => {
    let self = this;
    $rootScope.loading.push({method: 'get'});
    return $http({
      method: 'POST',
      url: `${SessionService.geApiUrl()}/faq`,
      data: faqHelper.dataToRequest(faq)
    }).then((result) => {
      self.articles = null;
      $rootScope.loading.splice(0, 1);
      $rootScope.$broadcast('updateArticles');
      return faqHelper.responseToData(result.data.data);
    });
  };

  /**
   * Update article(FAQ)
   * @param {Article} faq - new faq
   * @returns {Promise.<{Article}>}
   */
  let update = (faq) => {
    let self = this;
    $rootScope.loading.push({method: 'get'});
    return $http({
      method: 'PUT',
      url: `${SessionService.geApiUrl()}/faq/${faq.id}`,
      data: faqHelper.dataToRequest(faq)
    }).then((result) => {
      self.articles = null;
      $rootScope.loading.splice(0, 1);
      $rootScope.$broadcast('updateArticles');
      return faqHelper.responseToData(result.data.data);
    });
  };

  /**
   * Remove article(FAQ)
   * @param {number} faqId - faq ID
   * @returns {Promise.<{Article}>}
   */
  let remove = (faqId) => {
    let self = this;
    $rootScope.loading.push({method: 'get'});
    return $http({
      method: 'DELETE',
      url: `${SessionService.geApiUrl()}/faq/${faqId}`,
    }).then((result) => {
      self.articles = null;
      $rootScope.loading.splice(0, 1);
      $rootScope.$broadcast('updateArticles');
      return result.data.data
    });
  };

  return {
    getAll,
    getById,
    create,
    update,
    remove,
    getByAlgoliaId,
  }
}

export default ArticleService;
