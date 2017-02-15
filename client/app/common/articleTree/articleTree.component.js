import template from './articleTree.html';
import controller from './articleTree.controller';
import './articleTree.scss';

let articleTreeComponent = {
  restrict: 'E',
  bindings: {
    articles: "="
  },
  template,
  controller
};

export default articleTreeComponent;
