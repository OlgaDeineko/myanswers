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
import SubdomainService from './services/subdomain.service';
import SettingsService from './services/settings.service';
import UsersService from './services/users.service';
import FakeDataService from './services/fakeData.service';

import settigns from './config.js';

import 'angular-schema-form';
import 'angular-schema-form-bootstrap';
import 'angular-ui-bootstrap';
import 'normalize.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import 'angular-ui-tree';
import 'ng-tags-input';
import 'ng-tags-input/build/ng-tags-input.min.css';
import 'angular-clipboard';
import  'ng-table';
import  'ng-table/bundles/ng-table.css';
import 'algoliasearch';
import 'angular-sanitize';
import 'tinymce';
import 'angular-ui-tinymce';
import 'tinymce/skins/lightgray/skin.min.css';
import 'tinymce/skins/lightgray/content.min.css';
import 'angular-toastr';
import 'angular-toastr/dist/angular-toastr.min.css';
// import 'angular-animate';

import 'tinymce/themes/modern/theme';
import 'tinymce/plugins/link/plugin';
import 'tinymce/plugins/paste/plugin';
import 'tinymce/plugins/table/plugin';
import 'tinymce/plugins/image/plugin';
import 'tinymce/plugins/wordcount/plugin';


angular.module('app', [
  uiRouter,
  permission,
  uiPermission,
  Common,
  Components,
  'ui.bootstrap',
  'schemaForm',
  'ui.tree',
  'ui.tinymce',
  'ngTagsInput',
  'angular-clipboard',
  'ngTable',
  'ngSanitize',
  // 'ngAnimate',
  'toastr'
])
  .config(($locationProvider, $httpProvider, $urlRouterProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $httpProvider.interceptors.push('ResponseObserver');

    $httpProvider.defaults.headers.common = {};
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};

    $urlRouterProvider.otherwise('/admin/category/');
  })
  .service('ResponseObserver', ResponseObserver)
  .service('SessionService', SessionService)
  .service('AuthenticationService', AuthenticationService)
  .service('ArticleService', ArticleService)
  .service('CategoryService', CategoryService)
  .service('SubdomainService', SubdomainService)
  .service('SettingsService', SettingsService)
  .service('UsersService', UsersService)
  .service('FakeDataService', FakeDataService)
  .component('app', AppComponent)
  .run(($rootScope, AuthenticationService) => {
    "ngInject";

    $rootScope.$on('$stateChangeStart', (event, next) => {
      AuthenticationService.initPermission();
    });

  });
