import config, {apiUrl} from '../config';

function FilesService($http, $q, $rootScope, SessionService) {
  "ngInject";

  let getAll = (type, objectId) => {
    $rootScope.loading.push({method: 'get'});
    return $http({
      method: 'GET',
      url: `${SessionService.geApiUrl()}/attachments/${type}/${objectId}`,
    }).then(result => {
      $rootScope.loading.splice(0, 1);
      return result.data.data
    });
  };

  /**
   * upload attach
   * @param {object[]} files
   * @param {string} files.name
   * @param {string} files.base64
   * @param {string} type
   * @param {integer} objectId
   */
  let create = (files, type, objectId) => {
    files = files.map(file => {
      return {
        base64: file.base64.split(',')[1],
        type: file.name.match(/.*\.(\w{3,4})$/)[1],
        name: file.name.replace(/(\.\w{3,4})$/, '')
      }
    });

    $rootScope.loading.push({method: 'get'});
    return $http({
      method: 'POST',
      url: `${SessionService.geApiUrl()}/attachments/${type}/${objectId}`,
      data: {files: files}
    }).then(result => {
      $rootScope.loading.splice(0, 1);
      return result.data.data
    });
  };

  return {
    getAll,
    create,
  }
}

export default FilesService;
