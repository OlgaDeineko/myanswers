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
        url: '/admin/faq/edit/{faqId}',
        template: '<edit-faq/>',
        component: 'editFaq',
        data: {
          permissions: {
            only: 'user',
            redirectTo: 'chooseSubdomain'
          }
        }
      })
      .state('createFaq', {
        url: '/admin/faq/create?categoryId',
        template: '<edit-faq/>',
        component: 'editFaq',
        data: {
          permissions: {
            only: 'user',
            redirectTo: 'chooseSubdomain'
          }
        }
      });
  })

  .name;

export default editFaqModule;
