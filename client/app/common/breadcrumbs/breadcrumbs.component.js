import template from './breadcrumbs.html';
import controller from './breadcrumbs.controller';
import './breadcrumbs.scss';

let breadcrumbsComponent = {
  restrict: 'E',
  bindings: {
    current: '=',
    home: '='
  },
  template,
  controller
};

export default breadcrumbsComponent;
