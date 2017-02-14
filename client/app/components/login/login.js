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
      url: '/login',
      component: 'login',
      template: '<login/>',
      data: {
        permissions: {
          only: 'notAuthorized',
          redirectTo: 'home'
        }
      }
    });
})

.component('login', loginComponent)

.name;

export default loginModule;
