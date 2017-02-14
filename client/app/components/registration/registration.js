import angular from 'angular';
import uiRouter from 'angular-ui-router';
import registrationComponent from './registration.component';

let registrationModule = angular.module('registration', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('registration', {
      url: '/registration',
      template: '<registration/>',
      component: 'registration',
      data: {
        permissions: {
          only: 'notAuthorized',
          redirectTo: 'home'
        }
      }
    });
})

.component('registration', registrationComponent)

.name;

export default registrationModule;
