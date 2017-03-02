import template from './forgotPasswordModal.html';
import controller from './forgotPasswordModal.controller';
import './forgotPasswordModal.scss';

let forgotPasswordModalComponent = {
  restrict: 'E',
  bindings: {
    resolve: '<'
  },
  template,
  controller
};

export default forgotPasswordModalComponent;
