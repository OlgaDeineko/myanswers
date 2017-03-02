import {local} from '../config';
function ResponseObserver($q, $window, toastr, SessionService, FakeDataService) {
  "ngInject";
  return {
    'request': (config) => {
      //TODO: remove on production
      if (local && !(/html$/.test(config.url))) {
        return $q.reject({
          err: 'RejectForLocal',
          url: config.url.replace(/http.*\/api\/v1\//, ''),
          method: config.method
        });
      }

      switch (config.method) {
        case 'POST':
          config.headers['Content-Type'] = 'application/json; charset=UTF-8';
          // config.transformRequest = (obj) => {
          //   var str = [];
          //   for(var p in obj)
          //   str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
          //   return str.join("&");
          // };
          break;
      }
      if (SessionService.getSubdomain()) {
        config.headers['Client-Subdomain'] = SessionService.getSubdomain();
        config.headers['Authorization'] = 'Bearer ' + SessionService.getToken();
      }
      return config;
    },
    'response': (response) => {
      if (!(/html$/.test(response.config.url))) {
        console.info(
          response.config.method,
          response.config.url.match(/.*\/api\/(v1\/.*)$/)[1],
          response);
      }
      return response;
    },
    'responseError': (errorResponse) => {
      //TODO: remove on production
      if (errorResponse.err == 'RejectForLocal') {
        return $q.resolve(FakeDataService.getData(errorResponse.url, errorResponse.method))
      }
      console.warn(errorResponse);
      switch (errorResponse.status) {

        case 404:
          return $q.resolve(errorResponse);
          break;
        case 403:
        case 401:
          //$window.location = './403.html';
          toastr.error(errorResponse.text, `Server error ${errorResponse.status}:`);
          break;
        case 500:
          //$window.location = './500.html';
          toastr.error(errorResponse.data.message, `Server error ${errorResponse.status}:`);
          break;
      }
      return $q.reject(errorResponse);
    }
  };
}

export default ResponseObserver;
