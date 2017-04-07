import template from './confirm.html';
import controller from './confirm.controller';
import './confirm.scss';

let confirmComponent = {
  restrict: 'E',
  bindings: {
    resolve: '<'
  },
  template,
  controller
};

export default confirmComponent;
