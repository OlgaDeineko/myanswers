import template from './categoryTree.html';
import controller from './categoryTree.controller';
import './categoryTree.scss';

let categoryTreeComponent = {
  restrict: 'E',
  bindings: {
    categories: "=",
    current: "="
  },
  template,
  controller
};

export default categoryTreeComponent;
