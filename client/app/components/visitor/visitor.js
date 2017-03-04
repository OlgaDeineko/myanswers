import angular from 'angular';
import visitorComponent from './visitor.component';

let visitorModule = angular.module('visitor', [])
  .component('visitor', visitorComponent)
  .name;

export default visitorModule;
