import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {permission, uiPermission} from 'angular-permission';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

import SessionService from './services/session.service';
import AuthenticationService from './services/authentication.service';
import ResponseObserver from './services/responseObserver.service';

import settigns from './config.js';

import 'angular-schema-form';
import 'angular-schema-form-bootstrap';

import 'angular-ui-bootstrap';
import 'normalize.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap';

angular.module('app', [
    uiRouter,
    permission,
    uiPermission,
    Common,
    Components,
    'ui.bootstrap',
    'schemaForm'
  ])
  .config(($locationProvider, $httpProvider, $urlRouterProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    // $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    $httpProvider.interceptors.push('ResponseObserver');

    $urlRouterProvider.otherwise('/');
  })
  .service('ResponseObserver', ResponseObserver)
  .service('SessionService', SessionService)
  .service('AuthenticationService', AuthenticationService)
  .component('app', AppComponent)
  .run(($rootScope, AuthenticationService) => {
      "ngInject";

      $rootScope.$on('$stateChangeStart', (event, next) => {
        AuthenticationService.initPermission();
      });

  });
