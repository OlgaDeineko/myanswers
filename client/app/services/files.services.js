import config, {apiUrl} from '../config';

function FilesService($http, $q, $rootScope, SessionService) {
  "ngInject";

  let getAll = (type, objectId) => {
    return $http({
      method: 'GET',
      url: `${SessionService.geApiUrl()}/attachments/${type}/${objectId}`,
    }).then(result => {
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
    console.log(files);

    return $http({
      method: 'POST',
      url: `${SessionService.geApiUrl()}/attachments/${type}/${objectId}`,
      data: {files: files}
    }).then(result => {
      return result.data.data
    });
  };

  return {
    getAll,
    create,
  }
}

export default FilesService;
