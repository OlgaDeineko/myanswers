import config, {apiUrl} from '../config';

function CategoryService($http, SessionService) {
  "ngInject";

  let getAll = () => {
    return $http({
      method: 'GET',
      url: `${SessionService.geApiUrl()}/category/tree`,
    }).then(result => {
      debugger;
      console.log(result);
      return result.data.data
    });
    // return new Promise((resolve, reject) => {
    //   resolve([
    //     {
    //       "node_id": "1",
    //       "parent_id": "0",
    //       "name": "Uncategorized"
    //     },
    //     {
    //       "node_id": "4",
    //       "parent_id": "1",
    //       "name": "IT"
    //     },
    //     {
    //       "node_id": "5",
    //       "parent_id": "2",
    //       "name": "Backend"
    //     },
    //     {
    //       "node_id": "9",
    //       "parent_id": "3",
    //       "name": "Frameworks"
    //     },
    //     {
    //       "node_id": "10",
    //       "parent_id": "3",
    //       "name": "CMS"
    //     },
    //     {
    //       "node_id": "11",
    //       "parent_id": "4",
    //       "name": "WordPress"
    //     },
    //     {
    //       "node_id": "12",
    //       "parent_id": "4",
    //       "name": "Drupal"
    //     },
    //     {
    //       "node_id": "6",
    //       "parent_id": "2",
    //       "name": "FrontEnd"
    //     },
    //     {
    //       "node_id": "7",
    //       "parent_id": "3",
    //       "name": "Angular"
    //     },
    //     {
    //       "node_id": "8",
    //       "parent_id": "3",
    //       "name": "React"
    //     }
    //   ]);
    // })
  }

  return {
    getAll
  }
}

export default CategoryService;
