import angular from 'angular';
import uiRouter from 'angular-ui-router';
import articleTreeComponent from './articleTree.component';

let articleTreeModule = angular.module('articleTree', [
  uiRouter
])

.component('articleTree', articleTreeComponent)

.name;

export default articleTreeModule;
