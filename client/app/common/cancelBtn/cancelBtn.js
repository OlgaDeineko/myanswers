import angular from 'angular';
import CancelBtn from './cancelBtn.factory';

let CancelBtnModule = angular.module('cancelBtn', [])

  .factory('cancelBtn', CancelBtn)

  .name;

export default CancelBtnModule;
