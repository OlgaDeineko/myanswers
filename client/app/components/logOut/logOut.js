import angular from 'angular';
import uiRouter from 'angular-ui-router';
import logOutComponent from './logOut.component';

let logOutModule = angular.module('logOut', [
  uiRouter
])

.component('logOut', logOutComponent)

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state({
      name: 'logout',
      url: '/logout',
      component: 'logout',
      template: '<log-out/>',
      data: {
        permissions: {
          except: 'anonymous',
          redirectTo: 'category'
        }
      }
    });
})

.name;

export default logOutModule;
