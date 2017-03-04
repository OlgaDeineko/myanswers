import angular from 'angular';
import categoryComponent from './category.component';

let categoryModule = angular.module('category', [])
  .component('category', categoryComponent)
  .name;

export default categoryModule;
