import config, {apiUrl} from '../config';

function ArticleService($http) {
  "ngInject";

  let getAll = () => {
    return new Promise((resolve, reject) => {
      resolve([
            {
              "faq_id": "1",
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
              "faq_id": "2",
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
              "faq_id": "3",
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
              "faq_id": "4",
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
              "faq_id": "5",
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
              "faq_id": "6",
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
              "faq_id": "7",
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
  }

  return {
    getAll
  }
}

export default ArticleService;
