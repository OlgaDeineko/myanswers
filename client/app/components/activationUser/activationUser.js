import angular from 'angular';
import uiRouter from 'angular-ui-router';
import activationUserComponent from './activationUser.component';

let activationUserModule = angular.module('activationUser', [
  uiRouter
])

.component('activationUser', activationUserComponent)

  .config(($stateProvider) => {
    "ngInject";

    $stateProvider
      .state({
        name: 'activation',
        url: '/activate?token',
        component: 'activationUser',
        template: '<activation-user/>',
        data: {
          permissions: {
            only: 'anonymous',
            redirectTo: 'chooseSubdomain'
          }
        }
      });
  })

.name;

export default activationUserModule;
