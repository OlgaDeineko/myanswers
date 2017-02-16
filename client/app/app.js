import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {permission, uiPermission} from 'angular-permission';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

import SessionService from './services/session.service';
import AuthenticationService from './services/authentication.service';
import ResponseObserver from './services/responseObserver.service';
import ArticleService from './services/article.service';
import CategoryService from './services/category.service';

import settigns from './config.js';

import 'angular-schema-form';
import 'angular-schema-form-bootstrap';

import 'angular-ui-bootstrap';
import 'normalize.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap';

import 'angular-ui-tree';

angular.module('app', [
    uiRouter,
    permission,
    uiPermission,
    Common,
    Components,
    'ui.bootstrap',
    'schemaForm',
    'ui.tree',
  ])
  .config(($locationProvider, $httpProvider, $urlRouterProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $httpProvider.interceptors.push('ResponseObserver');

    $urlRouterProvider.otherwise('/');
  })
  .service('ResponseObserver', ResponseObserver)
  .service('SessionService', SessionService)
  .service('AuthenticationService', AuthenticationService)
  .service('ArticleService', ArticleService)
  .service('CategoryService', CategoryService)
  .component('app', AppComponent)
  .run(($rootScope, AuthenticationService) => {
      "ngInject";

      $rootScope.$on('$stateChangeStart', (event, next) => {
        AuthenticationService.initPermission();
      });

  });
