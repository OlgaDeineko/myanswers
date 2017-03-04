import angular from 'angular';
import faqCategoriesComponent from './faqCategories.component';

let faqCategoriesModule = angular.module('faqCategories', [])
  .component('faqCategories', faqCategoriesComponent)
  .name;

export default faqCategoriesModule;
