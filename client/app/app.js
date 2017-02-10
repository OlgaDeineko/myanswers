import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
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
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })
  .service('AuthenticationService', AuthenticationService)
  .component('app', AppComponent)
  .run((AuthenticationService) => {
      "ngInject";
      AuthenticationService.initialize();
  });
