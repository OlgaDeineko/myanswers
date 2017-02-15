import angular from 'angular';

import Navbar from './navbar/navbar';
import Toolbar from './toolbar/toolbar';
import TypeOfQuestions from './typeOfQuestions/typeOfQuestions';
import CategoryTree from './categoryTree/categoryTree';
import ArticleTree from './articleTree/articleTree';

import Hero from './hero/hero';
import User from './user/user';

let commonModule = angular.module('app.common', [
  Toolbar,
  TypeOfQuestions,
  CategoryTree,
  ArticleTree,
  Navbar,
  Hero,
  User
])

.name;

export default commonModule;
