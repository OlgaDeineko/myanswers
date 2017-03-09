/**
 * @name UserResponse
 * @property {string} id - user id
 * @property {string} access_token - user access token
 * @property {string} refresh_token
 * @property {string} token_type - user access token type
 * @property {number} expires_in
 * @property {string} stormpath_access_token_href
 * @property {string[]} role - user roles
 * @property {string} email - user email
 * @property {string} status
 * @property {string} username - username
 * @property {string} first_name - user first name
 * @property {string} last_name - user last name
 * @property {string[]} subdomains - user subdomains
 */
/**
 * @name User
 * @property {string} id - user id
 * @property {string} access_token - user access token
 * @property {string} refresh_token
 * @property {string} token_type - user access token type
 * @property {number} expires_in
 * @property {string} status
 * @property {string} stormpath_access_token_href
 * @property {string} role - user roles
 * @property {string} email - user email
 * @property {string} username - username
 * @property {string} first_name - user first name
 * @property {string} last_name - user last name
 * @property {string[]} subdomains - user subdomains
 *
 * @property {string} fullName - user full name
 * @property {string} subdomain - user subdomain
 *
 */

function userHelper() {

  /**
   * Prepare user
   * @param {UserResponse} user
   * @returns {User}
   */
  let responseToData = (user) => {
    user.fullName = `${user.first_name} ${user.last_name}`;
    user.role = (user.role && user.role.length) ? user.role[0] : '';
    user.subdomain = (user.subdomains && user.subdomains.length) ? user.subdomains[0] : '';
    return user;
  };

  /**
   * Prepare user to request
   * @param {User} user
   * @returns {User}
   */
  let dataToRequest = (user) => {
    return user
  };

  return {
    responseToData,
    dataToRequest
  }
}

export default userHelper;
