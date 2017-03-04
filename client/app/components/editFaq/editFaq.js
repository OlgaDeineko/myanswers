import angular from 'angular';
import editFaqComponent from './editFaq.component';

let editFaqModule = angular.module('editFaq', [])
  .component('editFaq', editFaqComponent)
  .name;

export default editFaqModule;
