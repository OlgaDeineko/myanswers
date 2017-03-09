import angular from 'angular';
import algoliaSearchComponent from './algoliaSearch.component';

let algoliaSearchModule = angular.module('algoliaSearch', [])
  .component('algoliaSearch', algoliaSearchComponent)
  .name;

export default algoliaSearchModule;
