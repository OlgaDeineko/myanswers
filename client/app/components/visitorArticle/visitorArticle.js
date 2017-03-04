import angular from 'angular';
import visitorArticleComponent from './visitorArticle.component';

let visitorArticleModule = angular.module('visitorArticle', [])
  .component('visitorArticle', visitorArticleComponent)
  .name;

export default visitorArticleModule;
