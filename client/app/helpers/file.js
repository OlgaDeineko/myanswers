/**
 * @name File
 * @property {number} model_id - file id
 * @property {string} model - object type (article, category, etc.)
 * @property {string} attachment_url - file url
 * @property {string} size - size
 * @property {string} type - file type (doc, docx, pdf, etc.)
 * @property {number} mime - mie type
 *
 * @property {string} name - file name
 */
/**
 * @name FileResponse
 * @property {number} model_id - file id
 * @property {string} model - object type (article, category, etc.)
 * @property {string} attachment_url - file url
 * @property {string} size - size
 * @property {string} type - file type (doc, docx, pdf, etc.)
 * @property {number} mime - mie type
 */
/**
 * @name FileRequest
 * @property {string} name - file name
 * @property {string} type - file type (doc, docx, pdf, etc.)
 * @property {string} base64 - file in base64
 */

function FileHelper() {
  'ngInject';

  /**
   * Prepare file
   * @param {FileResponse} file
   * @returns {File}
   */
  let responseToData = (file) => {

    return file;
  };

  /**
   * Prepare file to request
   * @param {File} file
   * @returns {FileRequest}
   */
  let dataToRequest = (file) => {
    return {
      base64: file.base64.split(',')[1],
      type: file.name.match(/.*\.(\w{3,4})$/)[1],
      name: file.name.replace(/(\.\w{3,4})$/, '')
    }
  };

  return {
    responseToData,
    dataToRequest
  }
}

export default FileHelper;
