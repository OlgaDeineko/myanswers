import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';

let homeModule = angular.module('home', [
  uiRouter,
])

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state({
      name: 'home',
      url: '/',
      component: 'home',
      template: '<home/>',
      data: {
        permissions: {
          only: 'user',
          redirectTo: 'chooseSubdomain'
        }
      }
    });
})

.component('home', homeComponent)

.name;

export default homeModule;
