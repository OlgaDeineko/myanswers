import angular from 'angular';
import uiRouter from 'angular-ui-router';
import categoryTreeComponent from './categoryTree.component';

let categoryTreeModule = angular.module('categoryTree', [
  uiRouter
])

.component('categoryTree', categoryTreeComponent)

.name;

export default categoryTreeModule;
