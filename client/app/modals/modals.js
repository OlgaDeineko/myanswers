import angular from 'angular';

import CreateCategoryModal from './createCategoryModal/createCategoryModal';
import CreateUserModal from './createUserModal/createUserModal';
import ForgotPasswordModal from './forgotPasswordModal/forgotPasswordModal';
import ChooseSubdomainModal from './chooseSubdomainModal/chooseSubdomainModal';

let modalsModule = angular.module('app.modals', [
  CreateCategoryModal,
  CreateUserModal,
  ForgotPasswordModal,
  ChooseSubdomainModal
])

  .name;

export default modalsModule;
