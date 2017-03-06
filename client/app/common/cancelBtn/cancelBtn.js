import angular from 'angular';
import cancelBtnComponent from './cancelBtn.component';

let cancelBtnModule = angular.module('cancelBtn', [])
  .component('cancelBtn', cancelBtnComponent)
  .name;

export default cancelBtnModule;
