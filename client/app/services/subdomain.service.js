function SubdomainService($http, $rootScope, SessionService) {
  "ngInject";

  let check = (subdomain) => {
    $rootScope.loading.push({method: 'get'});
    return $http({
      method: 'POST',
      url: `${SessionService.geApiUrl()}/auth/check-subdomain`,
      data: {
        "subdomain": subdomain
      }
    }).then(result => {
      $rootScope.loading.splice(0, 1);
      return result.data
    });
  }

  return {
    check
  }
}

export default SubdomainService;
