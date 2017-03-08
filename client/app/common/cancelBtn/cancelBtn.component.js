import template from './cancelBtn.html';
import controller from './cancelBtn.controller';
import './cancelBtn.scss';

let cancelBtnComponent = {
  restrict: 'E',
  bindings: {
    title: '=',
    btnClass: '='
  },
  template,
  controller
};

export default cancelBtnComponent;
