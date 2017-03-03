import angular from 'angular';
import uiRouter from 'angular-ui-router';
import faqCategoriesComponent from './faqCategories.component';

let faqCategoriesModule = angular.module('faqCategories', [
  uiRouter
])

  .component('faqCategories', faqCategoriesComponent)

  .config(($stateProvider) => {
    "ngInject";

    $stateProvider
      .state('faqCategories', {
        url: '/admin/faq-statuses/{status}',
        template: '<faq-categories/>',
        component: 'faq-categories',
        data: {
          permissions: {
            only: ['user', 'admin', 'superAdmin'],
            redirectTo: 'chooseSubdomain'
          }
        }
      });
  })

  .name;

export default faqCategoriesModule;
