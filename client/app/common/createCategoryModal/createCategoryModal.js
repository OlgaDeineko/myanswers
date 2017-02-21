import angular from 'angular';
import uiRouter from 'angular-ui-router';
import createCategoryModalComponent from './createCategoryModal.component';

let createCategoryModalModule = angular.module('createCategoryModal', [
  uiRouter
])

.component('createCategoryModal', createCategoryModalComponent)

.name;

export default createCategoryModalModule;
