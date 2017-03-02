function userHelper() {

  let responseToData = (user) => {
    user.fullName = `${user.first_name} ${user.last_name}`;
    user.role = (user.role && user.role.length) ? user.role[0] : '';
    user.subdomain = (user.subdomains && user.subdomains.length) ? user.subdomains[0] : '';
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
