import config, {apiUrl} from '../config';

function ArticleService($http, SessionService) {
  "ngInject";

  let getAll = () => {
    return $http({
      method: 'GET',
      url: `${SessionService.geApiUrl()}/faq`,
    }).then(result => {
      console.log(result);
      return result.data.data
    });
/*
    return new Promise((resolve, reject) => {
      resolve([
            {
              "id": "1",
              "question": "Test Questiin",
              "answer": "Test Answer",
              "slug": "test-answer",
              "visibility": "public",
              "is_open_comments": "1",
              "author": null,
              "status": "published",
              "algolia_object_id": null,
              "created_at": null,
              "updated_at": null,
              "categories": [
                "4"
              ]
            },
            {
              "id": "2",
              "question": "Test Question 2",
              "answer": "Test Answer 2",
              "slug": "test-answer2",
              "visibility": "public",
              "is_open_comments": "1",
              "author": null,
              "status": "published",
              "algolia_object_id": null,
              "created_at": null,
              "updated_at": null,
              "categories": [
                "1",
                "5"
              ]
            },
            {
              "id": "3",
              "question": "Test Question 3",
              "answer": "Test Answer 3",
              "slug": "test-answer3",
              "visibility": "public",
              "is_open_comments": "1",
              "author": null,
              "status": "trash",
              "algolia_object_id": null,
              "created_at": null,
              "updated_at": null,
              "categories": [
                "5"
              ]
            },
            {
              "id": "4",
              "question": "Test Question 4",
              "answer": "Test Answer 4",
              "slug": "test-answer4",
              "visibility": "public",
              "is_open_comments": "1",
              "author": null,
              "status": "trash",
              "algolia_object_id": null,
              "created_at": null,
              "updated_at": null,
              "categories": [
                "5",
                "6"
              ]
            },
            {
              "id": "5",
              "question": "Test Question 5",
              "answer": "Test Answer 5",
              "slug": "test-answer5",
              "visibility": "public",
              "is_open_comments": "1",
              "author": null,
              "status": "draft",
              "algolia_object_id": null,
              "created_at": null,
              "updated_at": null,
              "categories": [
                "10"
              ]
            },
            {
              "id": "6",
              "question": "Test Question 6",
              "answer": "Test Answer 6",
              "slug": "test-answer6",
              "visibility": "public",
              "is_open_comments": "1",
              "author": null,
              "status": "draft",
              "algolia_object_id": null,
              "created_at": null,
              "updated_at": null,
              "categories": [
                "12"
              ]
            },
            {
              "id": "7",
              "question": "Test Question 7",
              "answer": "Test Answer 7",
              "slug": "test-answer7",
              "visibility": "public",
              "is_open_comments": "1",
              "author": null,
              "status": "draft",
              "algolia_object_id": null,
              "created_at": null,
              "updated_at": null,
              "categories": [
                "11"
              ]
            }
          ]);
    })
    */
  };

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
        categories: [{id: 4, node_id: 4, name: "IT", description: "", lang: "en"}],
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
