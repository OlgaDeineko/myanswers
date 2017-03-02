import angular from 'angular';

import Navbar from './navbar/navbar';
import TypeOfQuestions from './typeOfQuestions/typeOfQuestions';
import ActionsOfTreeItem from './actionsOfTreeItem/actionsOfTreeItem';
import CategoryTree from './categoryTree/categoryTree';
import ArticleTree from './articleTree/articleTree';
import Breadcrumbs from './breadcrumbs/breadcrumbs';
import CreateCategoryModal from './createCategoryModal/createCategoryModal';
import CreateUserModal from './createUserModal/createUserModal';
import TreeItem from './treeItem/treeItem';
import CancelBtn from './cancelBtn/cancelBtn';

import User from './user/user';

let commonModule = angular.module('app.common', [
  Breadcrumbs,
  TypeOfQuestions,
  ActionsOfTreeItem,
  CategoryTree,
  ArticleTree,
  Navbar,
  CreateCategoryModal,
  CreateUserModal,
  TreeItem,
  User,
  CancelBtn
])

  .name;

export default commonModule;
