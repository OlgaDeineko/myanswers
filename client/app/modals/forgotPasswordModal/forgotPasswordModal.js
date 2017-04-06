import angular from 'angular';
import uiRouter from 'angular-ui-router';
import forgotPasswordModalComponent from './forgotPasswordModal.component';

let forgotPasswordModalModule = angular.module('forgotPasswordModal', [])
  .component('forgotPasswordModal', forgotPasswordModalComponent)
  .name;

export default forgotPasswordModalModule;
