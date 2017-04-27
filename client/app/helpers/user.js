/**
 * @typedef {object} UserResponse
 * @property {string} id - user id
 * @property {string[]} role - user roles
 * @property {string} email - user email
 * @property {string} status - user status (enable, disable, etc.)
 * @property {string} username - username
 * @property {string} first_name - user first name
 * @property {string} last_name - user last name
 * @property {string[]} subdomains - user subdomains
 */
/**
 * @typedef {object} LoginResponse
 * @property {string} id - user id
 * @property {string} access_token - user access token
 * @property {string} refresh_token
 * @property {string} token_type - user access token type
 * @property {number} expires_in
 * @property {string} status
 * @property {string} stormpath_access_token_href
 * @property {string[]} role - user roles
 * @property {string} email - user email
 * @property {string} username - username
 * @property {string} first_name - user first name
 * @property {string} last_name - user last name
 * @property {string[]} subdomains - user subdomains
 */
/**
 * @typedef {object} User
 * @property {string} id - user id
 * @property {string} status
 * @property {string[]} role - user roles
 * @property {string} email - user email
 * @property {string} username - username
 * @property {string} first_name - user first name
 * @property {string} last_name - user last name
 * @property {string[]} subdomains - user subdomains
 *
 * @property {string} fullName - user full name
 * @property {string} subdomain - user subdomain
 * @property {string} roleName - user role
 *
 */

function userHelper() {
  /**
   * Prepare user
   * @param {UserResponse | LoginResponse} user
   * @returns {User}
   */
  let responseToData = (user) => {
    let preparedUser = {
      id: user.id,
      status: user.status,
      role: user.role,
      email: user.email,
      username: user.username,
      first_name: user.first_name,
      last_name: user.last_name,
      subdomains: user.subdomains,
    };

    preparedUser.fullName = `${user.first_name} ${user.last_name}`;
    preparedUser.roleName = (user.role || [])[0];
    preparedUser.subdomain = (user.subdomains || [])[0];
    return preparedUser;
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
