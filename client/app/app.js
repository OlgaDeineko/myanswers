import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

import SessionService from './services/session.service';
import AuthenticationService from './services/authentication.service';

import settigns from './config.js';

import 'angular-schema-form';
import 'angular-schema-form-bootstrap';

import 'angular-ui-bootstrap';
import 'normalize.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap';

angular.module('app', [
    uiRouter,
    Common,
    Components,
    'ui.bootstrap',
    'schemaForm',
  ])
  .config(($locationProvider, $httpProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');

    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.transformRequest = (obj) => {
      var str = [];
      for(var p in obj)
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      return str.join("&");
    };
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    // $httpProvider.interceptors.push(function() {
    //     return {
    //         responseError: function(rejection) {
    //             console.log("bad response");
    //             if(rejection.config.handleError && rejection.status === 403){
    //               console.warn("bad response")
    //                 //show error dialog
    //             }
    //             return rejection;
    //         }
    //     }
    // });
  })
  .service('SessionService', SessionService)
  .service('AuthenticationService', AuthenticationService)
  .component('app', AppComponent)
  .run(($rootScope, $location, AuthenticationService, SessionService) => {
      "ngInject";

      $rootScope.$on('$routeChangeStart', function(event, next, current) {
        alert('tt');
        if(next.access){
            //Do Stuff
        }
        else{
            $location.path("/login");
            //This will load the current route first (ie: '/home'), and then
            //redirect the user to the correct 'login' route.
        }
      });

      // $rootScope.$on("$locationChangeStart", (event, newUrl, current) => {
      //   if (!SessionService.isLoggedIn()) {
      //     $rootScope.$evalAsync(() => {
      //       $location.path('/login');
      //     });
      //   }
      // });

  });
