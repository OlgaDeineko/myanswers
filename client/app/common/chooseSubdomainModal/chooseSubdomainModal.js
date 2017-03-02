import angular from 'angular';
import uiRouter from 'angular-ui-router';
import chooseSubdomainModalComponent from './chooseSubdomainModal.component';

let chooseSubdomainModalModule = angular.module('chooseSubdomainModal', [
  uiRouter
])

.component('chooseSubdomainModal', chooseSubdomainModalComponent)

.name;

export default chooseSubdomainModalModule;
