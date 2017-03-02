import angular from 'angular';
import Login from './login/login';
import Registration from './registration/registration';
import Category from './category/category';
import About from './about/about';
import ChooseSubdomain from './chooseSubdomain/chooseSubdomain';
import Faq from './faq/faq';
import EditFaq from './editFaq/editFaq';
import Users from './users/users';
import Visitor from './visitor/visitor';
import FaqCategories from './faqCategories/faqCategories';
import ForgotPassword from './forgotPassword/forgotPassword';

let componentModule = angular.module('app.components', [
  ChooseSubdomain,
  Login,
  Registration,
  Category,
  About,
  EditFaq,
  Faq,
  Users,
  Visitor,
  FaqCategories,
  ForgotPassword,
])

.name;

export default componentModule;
