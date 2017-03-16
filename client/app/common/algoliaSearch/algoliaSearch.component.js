import template from './algoliaSearch.html';
import controller from './algoliaSearch.controller';
import './algoliaSearch.scss';

let algoliaSearchComponent = {
  restrict: 'E',
  bindings: {
    searchModel: '=',
    category: '='
  },
  template,
  controller
};

export default algoliaSearchComponent;
