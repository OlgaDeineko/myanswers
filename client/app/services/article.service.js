import config, {apiUrl} from '../config';

function ArticleService($http, $rootScope, faqHelper, SessionService, FilesService) {
  "ngInject";
  let articles = null;

  /**
   * Get all articles(FAQ)
   * @returns {Promise.<Article[]>}
   */
  let getAll = (update) => {
    let self = this;
    if (this.articles && !update) {
      return new Promise((resolve, reject) => {
        resolve(self.articles);
      })
    }

    $rootScope.loading.push({method: 'get'});
    return $http({
      method: 'GET',
      url: `${SessionService.geApiUrl()}/faq`,
    }).then(result => {
      $rootScope.loading.splice(0, 1);
      self.articles = result.data.data.map(faqHelper.responseToData);
      return self.articles;
    });
  };

  /**
   * Get article(FAQ) by id
   * @param {integer} faqId
   * @returns {Promise.<Article>}
   */
  let getById = (faqId) => {
    $rootScope.loading.push({method: 'get'});
    return $http({
      method: 'GET',
      url: `${SessionService.geApiUrl()}/faq/${faqId}`,
    }).then(result => {
      $rootScope.loading.splice(0, 1);
      return faqHelper.responseToData(result.data.data);
    }).then(article => {
      return FilesService.getAll('faq', article.id)
        .then(attachments => {
          article.attachments = attachments.map(file => {
            file.name = file.attachment_url.match(/.*\/faq\/\d+\/(.*)$/)[1];
            return file;
          });

          return article;
        });
    });
  };

  /**
   * Get article(FAQ) by algolia id
   * @param {integer} algoliaId
   * @returns {Promise.<Article>}
   */
  let getByAlgoliaId = (algoliaId) => {
    $rootScope.loading.push({method: 'get'});
    return $http({
      method: 'GET',
      url: `${SessionService.geApiUrl()}/faq/algolia/${algoliaId}`,
    }).then(result => {
      $rootScope.loading.splice(0, 1);
      return faqHelper.responseToData(result.data.data);
    }).then(article => {
      return FilesService.getAll('faq', article.id)
        .then(attachments => {
          article.attachments = attachments.map(file => {
            file.name = file.attachment_url.match(/.*\/faq\/\d+\/(.*)$/)[1];
            return file;
          });

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
    }).then(result => {
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
    }).then(result => {
      self.articles = null;
      $rootScope.loading.splice(0, 1);
      $rootScope.$broadcast('updateArticles');
      return faqHelper.responseToData(result.data.data);
    });
  };

  /**
   * Remove article(FAQ)
   * @param {integer} faqId - faq ID
   * @returns {Promise.<{Article}>}
   */
  let remove = (faqId) => {
    let self = this;
    $rootScope.loading.push({method: 'get'});
    return $http({
      method: 'DELETE',
      url: `${SessionService.geApiUrl()}/faq/${faqId}`,
    }).then(result => {
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
