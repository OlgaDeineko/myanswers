import template from './algoliaSearch.html';
import controller from './algoliaSearch.controller';
import './algoliaSearch.scss';

let algoliaSearchComponent = {
  restrict: 'E',
  bindings: {
    searchModel: '='
  },
  template,
  controller
};

export default algoliaSearchComponent;
