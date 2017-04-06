import angular from 'angular';
import createCategoryModalComponent from './createCategoryModal.component';

let createCategoryModalModule = angular.module('createCategoryModal', [])
  .component('createCategoryModal', createCategoryModalComponent)
  .name;

export default createCategoryModalModule;
