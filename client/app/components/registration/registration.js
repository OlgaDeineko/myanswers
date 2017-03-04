import angular from 'angular';
import registrationComponent from './registration.component';

let registrationModule = angular.module('registration', [])
  .component('registration', registrationComponent)
  .name;

export default registrationModule;
