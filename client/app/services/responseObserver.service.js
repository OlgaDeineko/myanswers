function ResponseObserver($q, $window) {
  "ngInject";
  return {
    'request': (config) => {
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
      config.transformRequest = (obj) => {
        var str = [];
        for(var p in obj)
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        return str.join("&");
      };
      return config;
    },
    'response': (response) => {
      return response;
    },
    'responseError': (errorResponse) => {
      switch (errorResponse.status) {
      case 403:
          $window.location = './403.html';
          break;
      case 500:
          $window.location = './500.html';
          break;
      }
      return $q.reject(errorResponse);
    }
  };
}

export default ResponseObserver;
