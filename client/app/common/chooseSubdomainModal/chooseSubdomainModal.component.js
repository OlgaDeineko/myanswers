import template from './chooseSubdomainModal.html';
import controller from './chooseSubdomainModal.controller';
import './chooseSubdomainModal.scss';

let chooseSubdomainModalComponent = {
  restrict: 'E',
  bindings: {
    resolve: '<'
  },
  template,
  controller
};

export default chooseSubdomainModalComponent;
