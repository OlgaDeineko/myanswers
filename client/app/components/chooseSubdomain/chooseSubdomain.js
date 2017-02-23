import angular from 'angular';
import uiRouter from 'angular-ui-router';
import chooseSubdomainComponent from './chooseSubdomain.component';

let chooseSubdomainModule = angular.module('chooseSubdomain', [
  uiRouter
])

.component('chooseSubdomain', chooseSubdomainComponent)

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state({
      name: 'chooseSubdomain',
      url: '/subdomain',
      component: 'chooseSubdomain',
      template: '<choose-subdomain/>',
      data: {
        permissions: {
          only: 'anonymous',
          redirectTo: 'category'
        }
      }
    });
})

.name;

export default chooseSubdomainModule;
