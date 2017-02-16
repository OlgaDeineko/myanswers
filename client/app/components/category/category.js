import angular from 'angular';
import uiRouter from 'angular-ui-router';
import categoryComponent from './category.component';

let categoryModule = angular.module('category', [
  uiRouter
])

.component('category', categoryComponent)

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('category', {
      url: '/category/{categoryId}',
      template: '<category/>',
      component: 'category',
      data: {
        permissions: {
          only: 'user',
          redirectTo: 'login'
        }
      }
    });
})

.name;

export default categoryModule;
