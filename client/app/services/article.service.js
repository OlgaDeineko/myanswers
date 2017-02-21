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

function ArticleService($http, SessionService) {
  "ngInject";

  /**
   * Get all articles(FAQ)
   * @returns {*|Promise.<{Article[]}>}
   */
  let getAll = () => {
    // return $http({
    //   method: 'GET',
    //   url: `${SessionService.geApiUrl()}/faq`,
    // }).then(result => {
    //   console.log(result);
    //   return result.data.data
    // });
    return new Promise((resolve, reject) => {
      resolve([
        {
          "id": "54",
          "question": "My Question",
          "answer": "Some Answer",
          "slug": "slug",
          "visibility": null,
          "is_open_comments": "1",
          "author": "Author name",
          "status": "published",
          "lang": null,
          "algolia_object_id": "356457391",
          "created_at": "1487671327",
          "updated_at": "1487671327",
          "categories": [],
          "tags": []
        }, {
          "id": "55",
          "question": "My Question",
          "answer": "Some Answer",
          "slug": "slug",
          "visibility": null,
          "is_open_comments": "1",
          "author": "Author name",
          "status": "published",
          "lang": null,
          "algolia_object_id": "356457421",
          "created_at": "1487671387",
          "updated_at": "1487671387",
          "categories": [{"id": "1", "id": "1", "name": "Uncategorized", "description": "", "lang": "en"}],
          "tags": []
        }, {
          "id": "56",
          "question": "My Question",
          "answer": "Some Answer",
          "slug": "slug",
          "visibility": null,
          "is_open_comments": "1",
          "author": "Author name",
          "status": "published",
          "lang": null,
          "algolia_object_id": "356457441",
          "created_at": "1487671429",
          "updated_at": "1487671429",
          "categories": [],
          "tags": []
        }, {
          "id": "60",
          "question": "My Question",
          "answer": "Some Answer",
          "slug": "slug",
          "visibility": null,
          "is_open_comments": "1",
          "author": "Author name",
          "status": "published",
          "lang": null,
          "algolia_object_id": "372895230",
          "created_at": "1487671846",
          "updated_at": "1487671846",
          "categories": [],
          "tags": []
        }, {
          "id": "62",
          "question": "My Question",
          "answer": "Some Answer",
          "slug": "slug",
          "visibility": null,
          "is_open_comments": "1",
          "author": "Author name",
          "status": "published",
          "lang": null,
          "algolia_object_id": "372897580",
          "created_at": "1487671975",
          "updated_at": "1487671975",
          "categories": [{"id": "1", "id": "1", "name": "Uncategorized", "description": "", "lang": "en"}],
          "tags": []
        }, {
          "id": "63",
          "question": "My Question",
          "answer": "Some Answer",
          "slug": "slug",
          "visibility": null,
          "is_open_comments": "1",
          "author": "Author name",
          "status": "published",
          "lang": null,
          "algolia_object_id": "372897590",
          "created_at": "1487672001",
          "updated_at": "1487672001",
          "categories": [],
          "tags": []
        }, {
          "id": "64",
          "question": "dsfgdsg",
          "answer": "<p>dgdfgdg</p>",
          "slug": null,
          "visibility": null,
          "is_open_comments": "1",
          "author": "Amelia Kim",
          "status": null,
          "lang": null,
          "algolia_object_id": "372897610",
          "created_at": "1487672007",
          "updated_at": "1487672007",
          "categories": [{"id": "4", "id": "4", "name": "IT", "description": "", "lang": "en"}],
          "tags": [{"tag_id": "23", "name": "ffdsdfg"}]
        }, {
          "id": "65",
          "question": "My Question",
          "answer": "Some Answer",
          "slug": "slug",
          "visibility": null,
          "is_open_comments": "1",
          "author": "Author name",
          "status": "published",
          "lang": null,
          "algolia_object_id": "347556972",
          "created_at": "1487672108",
          "updated_at": "1487672108",
          "categories": [],
          "tags": []
        }, {
          "id": "66",
          "question": "My Question",
          "answer": "Some Answer",
          "slug": "slug",
          "visibility": null,
          "is_open_comments": "1",
          "author": "Author name",
          "status": "published",
          "lang": null,
          "algolia_object_id": "356457651",
          "created_at": "1487672169",
          "updated_at": "1487672169",
          "categories": [],
          "tags": []
        }, {
          "id": "67",
          "question": "My Question",
          "answer": "Some Answer",
          "slug": "slug",
          "visibility": null,
          "is_open_comments": "1",
          "author": "Author name",
          "status": "published",
          "lang": null,
          "algolia_object_id": "347557022",
          "created_at": "1487672251",
          "updated_at": "1487672251",
          "categories": [],
          "tags": []
        }, {
          "id": "68",
          "question": "My Question",
          "answer": "Some Answer",
          "slug": "slug",
          "visibility": null,
          "is_open_comments": "1",
          "author": "Author name",
          "status": "published",
          "lang": null,
          "algolia_object_id": "372900090",
          "created_at": "1487672423",
          "updated_at": "1487672423",
          "categories": [],
          "tags": []
        }, {
          "id": "69",
          "question": "My Question",
          "answer": "Some Answer",
          "slug": "slug",
          "visibility": null,
          "is_open_comments": "1",
          "author": "Author name",
          "status": "published",
          "lang": null,
          "algolia_object_id": "372900380",
          "created_at": "1487672475",
          "updated_at": "1487672475",
          "categories": [],
          "tags": []
        }
      ]);
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
      console.log(result);
      return result.data.data
    });
    /*
     return new Promise((resolve, reject) => {
     resolve({
     algolia_object_id: 370371350,
     answer: "<p>sdgdfgdsgsdfgd</p>",
     author: "Amelia Kim",
     categories: [{id: 4, id: 4, name: "IT", description: "", lang: "en"}],
     created_at: 1487603827,
     id: 51,
     is_open_comments: 1,
     question: "bla-bla-bla",
     status: null,
     tags: [{tag_id: 9, name: "test"}, {tag_id: 10, name: "testsd"}, {tag_id: 12, name: "bla"}],
     updated_at: 1487605866,

     language: 'English',
     visibility: 'Public',
     remarks: [
     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet nulla tellus. Aenean ac convallis odio. Praesent sed quam dolor. Suspendisse vel facilisis lorem. Cras non aliquet mauris. Aenean et ipsum interdum, congue lectus vitae, consequat ex. Vestibulum auctor ex eros, a cursus dolor lobortis sed. Vestibulum lacinia malesuada diam, ac tristique felis lacinia ac.',
     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet nulla tellus. Aenean ac convallis odio. Praesent sed quam dolor. Suspendisse vel facilisis lorem. Cras non aliquet mauris. Aenean et ipsum interdum, congue lectus vitae, consequat ex. Vestibulum auctor ex eros, a cursus dolor lobortis sed. Vestibulum lacinia malesuada diam, ac tristique felis lacinia ac.',
     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet nulla tellus. Aenean ac convallis odio. Praesent sed quam dolor. Suspendisse vel facilisis lorem. Cras non aliquet mauris. Aenean et ipsum interdum, congue lectus vitae, consequat ex. Vestibulum auctor ex eros, a cursus dolor lobortis sed. Vestibulum lacinia malesuada diam, ac tristique felis lacinia ac.',
     ],
     })
     });
     */
  };

  /**
   * Create article(FAQ)
   * @param {Article} faq - new faq
   * @returns {Promise.<{Article}>}
   */
  let save = (faq) => {
    return $http({
      method: 'POST',
      url: `${SessionService.geApiUrl()}/faq`,
      data: faq
    }).then(result => {
      console.log(result);
      return result.data.data
    });
  };

  /**
   * Update article(FAQ)
   * @param {Article} faq - new faq
   * @returns {Promise.<{Article}>}
   */
  let update = (faq) => {
    return $http({
      method: 'PUT',
      url: `${SessionService.geApiUrl()}/faq/${faq.id}`,
      data: faq
    }).then(result => {
      console.log(result);
      return result.data.data
    });
  };

  /**
   * Remove article(FAQ)
   * @param {integer} faqId - faq ID
   * @returns {Promise.<{Article}>}
   */
  let remove = (faqId) => {
    return $http({
      method: 'DELETE',
      url: `${SessionService.geApiUrl()}/faq/${faqId}`,
    }).then(result => {
      console.log(result);
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
