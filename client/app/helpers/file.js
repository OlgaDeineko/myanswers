/**
 * @typedef {object} Attachment
 * @property {number} id - file id
 * @property {number} model_id - object id
 * @property {string} model - object type (article, category, etc.)
 * @property {string} attachment_url - file url
 * @property {string} size - size
 * @property {string} type - file type (doc, docx, pdf, etc.)
 * @property {number} mime - mime type
 *
 * @property {string} name - file name
 */
/**
 * @typedef {object} AttachmentResponse
 * @property {number} id - file id
 * @property {number} model_id - object id
 * @property {string} model - object type (article, category, etc.)
 * @property {string} attachment_url - file url
 * @property {string} size - size
 * @property {string} type - file type (doc, docx, pdf, etc.)
 * @property {number} mime - mie type
 */
/**
 * @typedef {object} AttachmentRequest
 * @property {string} name - file name
 * @property {string} type - file type (doc, docx, pdf, etc.)
 * @property {string} base64 - file in base64
 */

function FileHelper() {
  'ngInject';

  /**
   * Prepare file
   * @param {AttachmentResponse} file
   * @returns {Attachment}
   */
  let responseToData = (file) => {
    let reg = new RegExp(`.*\\\/${file.model}\/\\d+\/(.*)$`);
    file.name = file.attachment_url.match(reg)[1];
    return file;
  };

  /**
   * Prepare file to request
   * @param {object} file
   * @param {string} file.name
   * @param {string} file.base64
   * @returns {AttachmentRequest}
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
