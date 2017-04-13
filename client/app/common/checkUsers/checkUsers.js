import angular from 'angular';
import checkUsersComponent from './checkUsers.component';

let checkUsersModule = angular.module('checkUsers', [])
  .component('checkUsers', checkUsersComponent)
  .name;

export default checkUsersModule;
