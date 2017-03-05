import angular from 'angular';
import uiRouter from 'angular-ui-router';
import createUserModalComponent from './createUserModal.component';

let createUserModalModule = angular.module('createUserModal', [
  uiRouter
])

.component('createUserModal', createUserModalComponent)

.name;

export default createUserModalModule;
