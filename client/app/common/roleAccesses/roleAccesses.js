import angular from 'angular';
import roleAccessesDirective from './roleAccesses.directive';

let RoleAccessModule = angular.module('roleAccess', [])
  .directive('roleAccesses', roleAccessesDirective)
  .name;

export default RoleAccessModule;
