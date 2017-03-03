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
          only: ['anonymous', 'any'],
          redirectTo: 'category'
        }
      }
    })
    .state({
      name: 'chooseSubdomainSuperAdmin',
      url: '/superadmin/chooseSubdomain?t&r&d&n',
      controller: ($state, SessionService) => {
        'ngInject'
        SessionService.create($state.params.t, $state.params.d, $state.params.r, $state.params.n);
        $state.go('category');
      },
      // data: {
      //   permissions: {
      //     only: 'superAdmin',
      //     redirectTo: 'chooseSubdomain'
      //   }
      // }
    });
})

.name;

export default chooseSubdomainModule;
