import config, {apiUrl} from '../config';

function CategoryService($http) {
  "ngInject";

  let getAll = () => {
    return $http({
      method: 'GET',
      url: `${apiUrl}/category/get-tree`,
    }).then(result => {
      return result.data.data
    })
  }

  return {
    getAll
  }
}

export default CategoryService;
