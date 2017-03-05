function FilesService($http, $rootScope, fileHelper, SessionService) {
  "ngInject";

  /**
   * Get all files
   * @param {string} type - object type (article, category, etc.)
   * @param {number} objectId
   */
  let getAll = (type, objectId) => {
    $rootScope.loading.push({method: 'get'});
    return $http({
      method: 'GET',
      url: `${SessionService.geApiUrl()}/attachments/${type}/${objectId}`,
    }).then((result) => {
      $rootScope.loading.splice(0, 1);
      return fileHelper.responseToData(result.data.data);
    });
  };

  /**
   * upload attach
   * @param {object[]} files
   * @param {string} type - object type (article, category, etc.)
   * @param {number} objectId
   */
  let create = (files, type, objectId) => {
    $rootScope.loading.push({method: 'get'});
    return $http({
      method: 'POST',
      url: `${SessionService.geApiUrl()}/attachments/${type}/${objectId}`,
      data: {files: files.map(fileHelper.dataToRequest)}
    }).then((result) => {
      $rootScope.loading.splice(0, 1);
      return fileHelper.responseToData(result.data.data);
    });
  };

  return {
    getAll,
    create,
  }
}

export default FilesService;
