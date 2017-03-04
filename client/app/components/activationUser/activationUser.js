import angular from 'angular';
import activationUserComponent from './activationUser.component';

let activationUserModule = angular.module('activationUser', [])
  .component('activationUser', activationUserComponent)
  .name;

export default activationUserModule;
