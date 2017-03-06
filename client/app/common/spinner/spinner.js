import angular from 'angular';
import spinnerComponent from './spinner.component';
import spinnerFactory from './spinner.factory';

let spinnerModule = angular.module('spinner', [])
  .component('spinner', spinnerComponent)
  .factory('spinnerFactory', spinnerFactory)
  .name;

export default spinnerModule;
