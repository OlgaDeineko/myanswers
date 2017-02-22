import angular from 'angular';
import uiRouter from 'angular-ui-router';
import usersComponent from './users.component';

let usersModule = angular.module('users', [
  uiRouter
])

.component('users', usersComponent)

  .config(($stateProvider) => {
    "ngInject";

    $stateProvider
      .state('users', {
        url: '/users',
        template: '<users/>',
        component: 'users',
        data: {
          // permissions: {
          //   only: 'user',
          //   redirectTo: 'login'
          // }
        }
      });
  })

.name;

export default usersModule;
