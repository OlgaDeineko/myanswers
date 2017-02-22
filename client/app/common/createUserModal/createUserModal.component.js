import template from './createUserModal.html';
import controller from './createUserModal.controller';
import './createUserModal.scss';

let createUserModalComponent = {
  restrict: 'E',
  bindings: {
    resolve: '<'
  },
  template,
  controller
};

export default createUserModalComponent;
