import angular from 'angular';
import uiRouter from 'angular-ui-router';
import faqComponent from './faq.component';


let faqModule = angular.module('faq', [
  uiRouter
])

  .component('faq', faqComponent)

  .config(($stateProvider) => {
    "ngInject";

    $stateProvider
      .state('faq', {
        url: '/faq/{faqId}',
        template: '<faq/>',
        component: 'faq',
        data: {
          // permissions: {
          //   only: 'user',
          //   redirectTo: 'login'
          // }
        }
      });
  })

  .name;

export default faqModule;