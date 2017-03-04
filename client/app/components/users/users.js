import angular from 'angular';
import usersComponent from './users.component';

let usersModule = angular.module('users', [])
  .component('users', usersComponent)
  .name;

export default usersModule;
