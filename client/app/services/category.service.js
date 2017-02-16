import config, {apiUrl} from '../config';

function CategoryService($http) {
  "ngInject";

  let getAll = () => {
    // return $http({
    //   method: 'GET',
    //   url: `${apiUrl}/category/tree`,
    // }).then(result => {
    //   return result.data.data
    // })
    return new Promise((resolve, reject) => {
      resolve([
        {
          "node_id": "1",
          "dependencies": "0",
          "name": "Uncategorized"
        },
        {
          "node_id": "4",
          "dependencies": "1",
          "name": "IT"
        },
        {
          "node_id": "5",
          "dependencies": "2",
          "name": "Backend"
        },
        {
          "node_id": "9",
          "dependencies": "3",
          "name": "Frameworks"
        },
        {
          "node_id": "10",
          "dependencies": "3",
          "name": "CMS"
        },
        {
          "node_id": "11",
          "dependencies": "4",
          "name": "WordPress"
        },
        {
          "node_id": "12",
          "dependencies": "4",
          "name": "Drupal"
        },
        {
          "node_id": "6",
          "dependencies": "2",
          "name": "FrontEnd"
        },
        {
          "node_id": "7",
          "dependencies": "3",
          "name": "Angular"
        },
        {
          "node_id": "8",
          "dependencies": "3",
          "name": "React"
        }
      ]);
    })
  }

  return {
    getAll
  }
}

export default CategoryService;
