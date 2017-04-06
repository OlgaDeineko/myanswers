import angular from 'angular';
import chooseSubdomainModalComponent from './chooseSubdomainModal.component';

let chooseSubdomainModalModule = angular.module('chooseSubdomainModal', [])
  .component('chooseSubdomainModal', chooseSubdomainModalComponent)
  .name;

export default chooseSubdomainModalModule;
