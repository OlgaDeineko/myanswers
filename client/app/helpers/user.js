import config, {apiUrl} from '../config';

function userHelper() {

  let responseToData = (user) => {
    user.fullName = `${user.first_name} ${user.last_name}`;
    user.role = user.role[0] || '';
    user.subdomain = user.subdomains[0] || '';
    return user;
  };

  let dataToRequest = (user) => {
    return user
  };

  return {
    responseToData,
    dataToRequest
  }
}

export default userHelper();
