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
    // .state('app', {
    //   url: '/',
    //   abstract: true,
    //   template: '<ui-view/>',
    //   resolve: {
    //     settings: (SettingsService) => {
    //       console.log('resolve');
    //       return SettingsService.getSettings();
    //     }
    //   }
    // })
    .state('category', {
      url: '/admin/category/{categoryId}',
      template: '<category/>',
      component: 'category',
      data: {
        permissions: {
          only: ['user', 'admin', 'superAdmin'],
          redirectTo: 'chooseSubdomain'
        }
      }
    });
})

.name;

export default categoryModule;
