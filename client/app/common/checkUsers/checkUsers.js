import angular from 'angular';
import checkUsersComponent from './checkUsers.component';

//this component not used
let checkUsersModule = angular.module('checkUsers', [])
  .component('checkUsers', checkUsersComponent)
  .name;

export default checkUsersModule;
