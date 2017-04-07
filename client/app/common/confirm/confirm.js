import angular from 'angular';
import confirmComponent from './confirm.component';
import confirmDirective from './confirm.directive';

let confirmModule = angular.module('confirm', [])
  .component('confirmComponent', confirmComponent)
  .directive('confirm', confirmDirective)
  .name;

export default confirmModule;
