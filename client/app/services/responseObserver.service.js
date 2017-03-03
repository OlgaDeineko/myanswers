import {local} from '../config';
function ResponseObserver($q, $injector, $rootScope, toastr, SessionService, FakeDataService) {
  "ngInject";
  return {
    'request': (config) => {
      console.log('start', config)
      // $rootScope.loading = true;
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
        // $rootScope.$emit('endLoad');
      }
      return response;
    },
    'responseError': (errorResponse) => {
      let rs = $injector.get('$rootScope');
      rs.loading = [];
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
          toastr.error("You don't have access to this actions");
          break;
        case 401:
          //$window.location = './403.html';
          toastr.error('Please login again', `Authorisation error:`);
          SessionService.destroy();
          //@see http://stackoverflow.com/a/25496219
          let stateService = $injector.get('$state');
          stateService.go('chooseSubdomain');
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
