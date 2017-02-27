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
      return result.data
    });
  }

  return {
    check
  }
}

export default SubdomainService;
