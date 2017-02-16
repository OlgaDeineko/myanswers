import config, {apiUrl} from '../config';

function SubdomainService($http) {
  "ngInject";

  let check = (subdomain) => {
    return $http({
      method: 'POST',
      url: `${apiUrl}/auth/check-subdomain`,
      data: {
        "subdomain": subdomain
      }
    }).then(result => {
      if(result.data.errors){
        throw result.data.errors
      }
      return result.data
    });
  }

  return {
    check
  }
}

export default SubdomainService;
