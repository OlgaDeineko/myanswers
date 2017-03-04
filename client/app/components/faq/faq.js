import angular from 'angular';
import faqComponent from './faq.component';


let faqModule = angular.module('faq', [])
  .component('faq', faqComponent)
  .name;

export default faqModule;
