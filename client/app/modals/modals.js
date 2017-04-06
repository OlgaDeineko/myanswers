import angular from 'angular';

import CreateCategoryModal from './createCategoryModal/createCategoryModal';
import CreateUserModal from './createUserModal/createUserModal';
import ForgotPasswordModal from './forgotPasswordModal/forgotPasswordModal';
import ChooseSubdomainModal from './chooseSubdomainModal/chooseSubdomainModal';
import ChooseLanguageModal from './chooseLanguageModal/chooseLanguageModal';

let modalsModule = angular.module('app.modals', [
  CreateCategoryModal,
  CreateUserModal,
  ForgotPasswordModal,
  ChooseSubdomainModal,
  ChooseLanguageModal
])

  .name;

export default modalsModule;
