function FilesService($http, fileHelper, SessionService) {
  "ngInject";

  /**
   * Get all files
   * @param {string} type - object type (article, category, etc.)
   * @param {number} objectId
   */
  let getAll = (type, objectId) => {
    return $http({
      method: 'GET',
      url: `${SessionService.geApiUrl()}/attachments/${type}/${objectId}`,
    }).then((result) => {
      return result.data.data.map(fileHelper.responseToData);
    });
  };

  /**
   * upload attach
   * @param {object[]} files
   * @param {string} type - object type (article, category, etc.)
   * @param {number} objectId
   */
  let create = (files, type, objectId) => {
    return $http({
      method: 'POST',
      url: `${SessionService.geApiUrl()}/attachments/${type}/${objectId}`,
      data: {files: files.map(fileHelper.dataToRequest)}
    }).then((result) => {
      return fileHelper.responseToData(result.data.data);
    });
  };

  return {
    getAll,
    create,
  }
}

export default FilesService;
