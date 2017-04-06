import angular from 'angular';
import chooseLanguageModalComponent from './chooseLanguageModal.component';

let chooseLanguageModalModule = angular.module('chooseLanguageModal', [])
  .component('chooseLanguageModal', chooseLanguageModalComponent)
  .name;

export default chooseLanguageModalModule;
