import angular from 'angular';

import Navbar from './navbar/navbar';
import Toolbar from './toolbar/toolbar';
import TypeOfQuestions from './typeOfQuestions/typeOfQuestions';
import ActionsOfTreeItem from './actionsOfTreeItem/actionsOfTreeItem';
import CategoryTree from './categoryTree/categoryTree';
import ArticleTree from './articleTree/articleTree';
import Breadcrumbs from './breadcrumbs/breadcrumbs';
import CreateCategoryModal from './createCategoryModal/createCategoryModal';

import Hero from './hero/hero';
import User from './user/user';

let commonModule = angular.module('app.common', [
  Toolbar,
  Breadcrumbs,
  TypeOfQuestions,
  ActionsOfTreeItem,
  CategoryTree,
  ArticleTree,
  Navbar,
  CreateCategoryModal,
  Hero,
  User
])

.name;

export default commonModule;
