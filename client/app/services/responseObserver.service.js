function ResponseObserver($q, $window, SessionService) {
  "ngInject";
  return {
    'request': (config) => {
      switch (config.method) {
      case 'POST':
          config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
          config.transformRequest = (obj) => {
            var str = [];
            for(var p in obj)
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            return str.join("&");
          };
          config.transformRequest = (obj) => {
            var str = [];
            for(var p in obj)
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            return str.join("&");
          };
          break;
      }
      if(SessionService.getSubdomain()){
        config.headers['Client-Subdomain'] = SessionService.getSubdomain();
        config.headers['Authorization'] = 'Bearer ' + SessionService.getToken();
      }
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
