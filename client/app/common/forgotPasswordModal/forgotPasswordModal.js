import angular from 'angular';
import uiRouter from 'angular-ui-router';
import forgotPasswordModalComponent from './forgotPasswordModal.component';

let forgotPasswordModalModule = angular.module('forgotPasswordModal', [
  uiRouter
])

.component('forgotPasswordModal', forgotPasswordModalComponent)

.name;

export default forgotPasswordModalModule;
