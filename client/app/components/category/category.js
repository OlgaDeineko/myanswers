import angular from 'angular';
import uiRouter from 'angular-ui-router';
import categoryComponent from './category.component';

let categoryModule = angular.module('category', [
  uiRouter
])

.component('category', categoryComponent)

.name;

export default categoryModule;
