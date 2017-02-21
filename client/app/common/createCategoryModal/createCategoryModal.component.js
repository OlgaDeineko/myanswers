import template from './createCategoryModal.html';
import controller from './createCategoryModal.controller';
import './createCategoryModal.scss';

let createCategoryModalComponent = {
  restrict: 'E',
  bindings: {
    resolve: '<'
  },
  template,
  controller
};

export default createCategoryModalComponent;
