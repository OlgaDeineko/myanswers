function SubdomainService($http, SessionService) {
  "ngInject";

  /**
   * check subdomain
   * @param {string} subdomain
   * @returns {Promise<Object>}
   */
  let check = (subdomain) => {
    return $http({
      method: 'POST',
      url: `${SessionService.geApiUrl()}/auth/check-subdomain`,
      data: {
        "subdomain": subdomain
      }
    }).then(result => {
      return result.data.data
    });
  };

  return {
    check
  }
}

export default SubdomainService;
