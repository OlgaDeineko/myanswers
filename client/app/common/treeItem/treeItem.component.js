import template from './treeItem.html';
import controller from './treeItem.controller';
import './treeItem.scss';

let treeItemComponent = {
  restrict: 'EA',
  bindings: {
    type: "=",
    item: "="
  },
  template,
  controller
};

export default treeItemComponent;
