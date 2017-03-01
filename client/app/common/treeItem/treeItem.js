import angular from 'angular';
import uiRouter from 'angular-ui-router';
import treeItemComponent from './treeItem.component';

let treeItemModule = angular.module('treeItem', [
  uiRouter
])

.component('treeItem', treeItemComponent)

.name;

export default treeItemModule;
