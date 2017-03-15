import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {permission, uiPermission} from 'angular-permission';
import Common from './common/common';
import Components from './components/components';
import Modals from './modals/modals';
import AppComponent from './app.component';
import Router from './router';

import SessionService from './services/session.service';
import AuthenticationService from './services/authentication.service';
import ResponseObserver from './services/responseObserver.service';
import ArticleService from './services/article.service';
import CategoryService from './services/category.service';
import SubdomainService from './services/subdomain.service';
import SettingsService from './services/settings.service';
import UsersService from './services/users.service';
import FakeDataService from './services/fakeData.service';
import FilesService from './services/files.services';

import FaqHelper from './helpers/faq';
import UserHelper from './helpers/user';
import CategoryHelper from './helpers/category';
import FileHelper from './helpers/file';

//
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
import 'angular-toastr';
import 'angular-toastr/dist/angular-toastr.min.css';
import './styles/font-awesome-4.7.0/css/font-awesome.min.css';
import 'ng-flow/dist/ng-flow-standalone';
import 'flag-icon-css/css/flag-icon.min.css';

import 'angular-drag-and-drop-lists';

import 'tinymce/skins/lightgray/skin.min.css';
// import 'tinymce/skins/lightgray/content.min.css';
import 'tinymce/plugins/codesample/css/prism.css';
import 'tinymce/plugins/visualblocks/css/visualblocks.css';

import 'tinymce/themes/modern/theme';

import 'tinymce/plugins/advlist/plugin';
import 'tinymce/plugins/autolink/plugin';
import 'tinymce/plugins/lists/plugin';
import 'tinymce/plugins/link/plugin';
import 'tinymce/plugins/image/plugin';
import 'tinymce/plugins/charmap/plugin';
import 'tinymce/plugins/print/plugin';
import 'tinymce/plugins/preview/plugin';
import 'tinymce/plugins/hr/plugin';
import 'tinymce/plugins/anchor/plugin';
import 'tinymce/plugins/pagebreak/plugin';
import 'tinymce/plugins/searchreplace/plugin';
import 'tinymce/plugins/wordcount/plugin';
import 'tinymce/plugins/visualblocks/plugin';
import 'tinymce/plugins/visualchars/plugin';
import 'tinymce/plugins/code/plugin';
import 'tinymce/plugins/fullscreen/plugin';
import 'tinymce/plugins/insertdatetime/plugin';
import 'tinymce/plugins/media/plugin';
import 'tinymce/plugins/nonbreaking/plugin';
import 'tinymce/plugins/save/plugin';
import 'tinymce/plugins/table/plugin';
import 'tinymce/plugins/contextmenu/plugin';
import 'tinymce/plugins/directionality/plugin';
import 'tinymce/plugins/emoticons/plugin';
import 'tinymce/plugins/template/plugin';
import 'tinymce/plugins/paste/plugin';
import 'tinymce/plugins/textcolor/plugin';
import 'tinymce/plugins/colorpicker/plugin';
import 'tinymce/plugins/textpattern/plugin';
import 'tinymce/plugins/imagetools/plugin';
import 'tinymce/plugins/codesample/plugin';
import 'tinymce/plugins/toc/plugin';


angular.module('app', [
  uiRouter,
  permission,
  uiPermission,
  Common,
  Components,
  Modals,
  Router,
  'ui.bootstrap',
  'schemaForm',
  'ui.tree',
  'ui.tinymce',
  'ngTagsInput',
  'angular-clipboard',
  'ngTable',
  'ngSanitize',
  'toastr',
  'flow',
  'dndLists'
])
  .config(($locationProvider, $httpProvider, flowFactoryProvider, $qProvider) => {
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

    $qProvider.errorOnUnhandledRejections(false);

    flowFactoryProvider.factory = function (opts) {
      let Flow = require('ng-flow/dist/ng-flow-standalone');
      return new Flow(opts)
    };
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
  .service('FilesService', FilesService)

  .service('faqHelper', FaqHelper)
  .service('userHelper', UserHelper)
  .service('categoryHelper', CategoryHelper)
  .service('fileHelper', FileHelper)

  .component('app', AppComponent)
  .run(($rootScope, $state, AuthenticationService, SessionService) => {
    "ngInject";

    $rootScope.$on('$stateChangeStart', (event, next) => {
      AuthenticationService.initPermission();
    });

    $rootScope.$on('$stateChangeSuccess', (ev, to, toParams, from, fromParams) => {
      if(from.name){
        SessionService.setPreviousPage(from.name, fromParams)
      }
    })

  });
