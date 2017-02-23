import angular from 'angular';
import uiRouter from 'angular-ui-router';
import loginComponent from './login.component';

let loginModule = angular.module('login', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state({
      name: 'login',
      url: '/login/:subdomain',
      component: 'login',
      template: '<login/>',
      data: {
        permissions: {
          only: 'anonymous',
          redirectTo: 'category'
        }
      }
    });
})

.component('login', loginComponent)

.name;

export default loginModule;
