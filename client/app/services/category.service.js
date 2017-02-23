import config, {apiUrl} from '../config';

function CategoryService($http, SessionService) {
  "ngInject";
  let categories = null;

  let getAll = (update) => {
    let self = this;
    if(this.categories && !update){
      return new Promise((resolve, reject) => {
        resolve(self.categories);
      })
    }

    return $http({
      method: 'GET',
      url: `${SessionService.geApiUrl()}/categories`,
    }).then(result => {
      console.log(result);
      self.categories = result.data.data;
      return result.data.data
    });
    // return new Promise((resolve, reject) => {
    //   resolve([
    //   {id: "1", parent_id: "0", name: "Uncategorized", lang: "en"},
    //   {id: "4", parent_id: "1", name: "IT", lang: "en"},
    //   {id: "5", parent_id: "4", name: "Backend", lang: "en"},
    //   {id: "6", parent_id: "4", name: "FrontEnd", lang: "en"},
    //   {id: "7", parent_id: "6", name: "Angular", lang: "en"},
    //   {id: "8", parent_id: "6", name: "React", lang: "en"},
    //   {id: "9", parent_id: "5", name: "Frameworks", lang: "en"},
    //   {id: "10", parent_id: "5", name: "CMS", lang: "en"},
    //   {id: "11", parent_id: "10", name: "WordPress", lang: "en"},
    //   {id: "12", parent_id: "10", name: "Drupal", lang: "en"}
    //   ]);
    // })
  };

  let create = (newCategory) => {
    return $http({
      method: 'POST',
      url: `${SessionService.geApiUrl()}/categories`,
      data: newCategory
    }).then(result => {
      console.log(result);
      return result.data.data || result.data
    });
  };

  let update = (category) => {
    return $http({
      method: 'PUT',
      url: `${SessionService.geApiUrl()}/categories/${category.id}`,
      data: category
    }).then(result => {
      console.log(result);
      return result.data.data
    });
  };

  let remove = (categoryId) => {
    return $http({
      method: 'DELETE',
      url: `${SessionService.geApiUrl()}/categories/${categoryId}`,
    }).then(result => {
      console.log(result);
      return result.data.data
    });
  };

  return {
    getAll,
    create,
    update,
    remove
  }
}

export default CategoryService;
