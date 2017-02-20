import angular from 'angular';
import uiRouter from 'angular-ui-router';
import editFaqComponent from './editFaq.component';

let editFaqModule = angular.module('editFaq', [
  uiRouter
])

  .component('editFaq', editFaqComponent)

  .config(($stateProvider) => {
    "ngInject";

    $stateProvider
      .state('editFaq', {
        url: '/faq/edit/{faqId}',
        template: '<edit-faq/>',
        component: 'editFaq',
        data: {
          // permissions: {
          //   only: 'user',
          //   redirectTo: 'login'
          // }
        }
      })
      .state('createFaq', {
        url: '/faq/create',
        template: '<edit-faq/>',
        component: 'editFaq',
        data: {
          // permissions: {
          //   only: 'user',
          //   redirectTo: 'login'
          // }
        }
      });
  })

  .name;

export default editFaqModule;
