import config, {apiUrl} from '../config';

/**
 * @typedef {object} Article
 * @property {integer} id - article id
 * @property {string} question - article question (title)
 * @property {string} answer - faq answer (text)
 * @property {string} slug - article slug
 * @property {string} visibility - article visibility (Public | Internal | Private)
 * @property {string} is_open_comments
 * @property {string} author - author full name
 * @property {string} status - article status published or no
 * @property {integer} algolia_object_id - algolia id
 * @property {timestamp} created_at
 * @property {timestamp} updated_at
 * @property {object[]} categories - categories article. now in array one element
 */

function ArticleService($http, $rootScope, SessionService) {
  "ngInject";
  let articles = null;

  /**
   * Get all articles(FAQ)
   * @returns {*|Promise.<{Article[]}>}
   */
  let getAll = (update) => {
    let self = this;
    if(this.articles && !update){
      return new Promise((resolve, reject) => {
        resolve(self.articles);
      })
    }
    return $http({
      method: 'GET',
      url: `${SessionService.geApiUrl()}/faq`,
    }).then(result => {
      self.articles = result.data.data;
      return result.data.data
    });
  };

  /**
   * Get article(FAQ) by id
   * @param {integer} faqId
   * @returns {*|Promise.<Article>}
   */
  let getById = (faqId) => {
    return $http({
      method: 'GET',
      url: `${SessionService.geApiUrl()}/faq/${faqId}`,
    }).then(result => {
      return result.data.data
    });
  };

  /**
   * Create article(FAQ)
   * @param {Article} faq - new faq
   * @returns {Promise.<{Article}>}
   */
  let save = (faq) => {
    let self = this;
    return $http({
      method: 'POST',
      url: `${SessionService.geApiUrl()}/faq`,
      data: faq
    }).then(result => {
      self.articles=null;
      $rootScope.$broadcast('updateArticles');
      return result.data.data
    });
  };

  /**
   * Update article(FAQ)
   * @param {Article} faq - new faq
   * @returns {Promise.<{Article}>}
   */
  let update = (faq) => {
    let self = this;
    return $http({
      method: 'PUT',
      url: `${SessionService.geApiUrl()}/faq/${faq.id}`,
      data: faq
    }).then(result => {
      self.articles=null;
      $rootScope.$broadcast('updateArticles');
      return result.data.data
    });
  };

  /**
   * Remove article(FAQ)
   * @param {integer} faqId - faq ID
   * @returns {Promise.<{Article}>}
   */
  let remove = (faqId) => {
    let self = this;
    return $http({
      method: 'DELETE',
      url: `${SessionService.geApiUrl()}/faq/${faqId}`,
    }).then(result => {
      self.articles=null;
      $rootScope.$broadcast('updateArticles');
      return result.data.data
    });
  };

  return {
    getAll,
    getById,
    save,
    update,
    remove
  }
}

export default ArticleService;
