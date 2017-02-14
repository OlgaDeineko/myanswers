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
      component: 'category'
    });
})

.name;

export default categoryModule;
