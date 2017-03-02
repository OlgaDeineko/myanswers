import angular from 'angular';
import uiRouter from 'angular-ui-router';
import visitorArticleComponent from './visitorArticle.component';

let visitorArticleModule = angular.module('visitorArticle', [
  uiRouter
])

  .component('visitorArticle', visitorArticleComponent)

  .config(($stateProvider) => {
    "ngInject";

    $stateProvider
      .state('visitorArticle', {
        url: '/home/faq/:faqId',
        template: '<visitor-article/>',
        component: 'visitorArticle',
        data: {
          permissions: {
            only: 'user',
            redirectTo: 'chooseSubdomain'
          }
        }
      });
  })

  .name;

export default visitorArticleModule;
