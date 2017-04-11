import template from './checkUsers.html';
import controller from './checkUsers.controller';
import './checkUsers.scss';

//this component not used
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
