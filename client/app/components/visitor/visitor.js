import angular from 'angular';
import uiRouter from 'angular-ui-router';
import visitorComponent from './visitor.component';

let visitorModule = angular.module('visitor', [
  uiRouter
])

.component('visitor', visitorComponent)

  .config(($stateProvider) => {
    "ngInject";

    $stateProvider
      .state('visitor', {
        url: '/home/:categoryId',
        template: '<visitor/>',
        component: 'visitor',
        data: {
          permissions: {
            only: 'user',
            redirectTo: 'chooseSubdomain'
          }
        }
      });
  })

.name;

export default visitorModule;
