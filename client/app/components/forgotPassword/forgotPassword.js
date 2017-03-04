import angular from 'angular';
import forgotPasswordComponent from './forgotPassword.component';

let forgotPasswordModule = angular.module('forgotPassword', [])
  .component('forgotPassword', forgotPasswordComponent)
  .name;

export default forgotPasswordModule;
