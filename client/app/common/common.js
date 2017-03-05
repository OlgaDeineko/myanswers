import angular from 'angular';

import Navbar from './navbar/navbar';
import TypeOfQuestions from './typeOfQuestions/typeOfQuestions';
import CategoryTree from './categoryTree/categoryTree';
import Breadcrumbs from './breadcrumbs/breadcrumbs';
import TreeItem from './treeItem/treeItem';
import CancelBtn from './cancelBtn/cancelBtn';

import User from './user/user';

let commonModule = angular.module('app.common', [
  Breadcrumbs,
  TypeOfQuestions,
  CategoryTree,
  Navbar,
  TreeItem,
  User,
  CancelBtn
])

  .name;

export default commonModule;
