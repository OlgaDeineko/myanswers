function SubdomainService($http, spinnerFactory, SessionService) {
  "ngInject";

  /**
   * check subdomain
   * @param {string} subdomain
   * @returns {Promise<Object>}
   */
  let check = (subdomain) => {
    spinnerFactory.start();
    return $http({
      method: 'POST',
      url: `${SessionService.geApiUrl()}/auth/check-subdomain`,
      data: {
        "subdomain": subdomain
      }
    }).then(result => {
      spinnerFactory.end();
      return result.data.data
    });
  };

  return {
    check
  }
}

export default SubdomainService;
