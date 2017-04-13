import template from './checkUsers.html';
import controller from './checkUsers.controller';
import './checkUsers.scss';

let checkUsersComponent = {
  restrict: 'E',
  bindings: {
    users: "=",
    selected: "=",
    updateMode: "=",
  },
  template,
  controller
};

export default checkUsersComponent;
