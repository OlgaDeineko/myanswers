import angular from 'angular';
import createUserModalComponent from './createUserModal.component';

let createUserModalModule = angular.module('createUserModal', [])
  .component('createUserModal', createUserModalComponent)
  .name;

export default createUserModalModule;
