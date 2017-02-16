import angular from 'angular';
import uiRouter from 'angular-ui-router';
import actionsOfTreeItemComponent from './actionsOfTreeItem.component';

let actionsOfTreeItemModule = angular.module('actionsOfTreeItem', [
  uiRouter
])

.component('actionsOfTreeItem', actionsOfTreeItemComponent)

.name;

export default actionsOfTreeItemModule;
