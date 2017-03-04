import angular from 'angular';
import chooseSubdomainComponent from './chooseSubdomain.component';

let chooseSubdomainModule = angular.module('chooseSubdomain', [])
  .component('chooseSubdomain', chooseSubdomainComponent)
  .name;

export default chooseSubdomainModule;
