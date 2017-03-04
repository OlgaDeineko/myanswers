import angular from 'angular';
import loginComponent from './login.component';

let loginModule = angular.module('login', [])
  .component('login', loginComponent)
  .name;

export default loginModule;
