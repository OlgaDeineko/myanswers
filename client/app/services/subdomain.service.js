import config, {apiUrl} from '../config';

function SubdomainService($http, SessionService) {
  "ngInject";

  let check = (subdomain) => {
    return $http({
      method: 'POST',
      url: `${SessionService.geApiUrl()}/auth/check-subdomain`,
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
