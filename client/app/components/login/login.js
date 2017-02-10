import angular from 'angular';
import uiRouter from 'angular-ui-router';
import loginComponent from './login.component';

let loginModule = angular.module('app.component.login', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('login', {
      url: '/login',
      requireLogin: false,
      component: 'login',
    });
})

.component('login', loginComponent)

.name;

export default loginModule;
