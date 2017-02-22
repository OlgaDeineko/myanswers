import angular from 'angular';
import Login from './login/login';
import Registration from './registration/registration';
// import Dashboard from './dashboard/dashboard'; //old version clon category !!TODO need removed
import Home from './home/home';
import Category from './category/category';
import About from './about/about';
import ChooseSubdomain from './chooseSubdomain/chooseSubdomain';
import Faq from './faq/faq';
import EditFaq from './editFaq/editFaq';

let componentModule = angular.module('app.components', [
  ChooseSubdomain,
  Login,
  Registration,
  Category,
  // Dashboard,
  Home,
  About,
  EditFaq,
  Faq,
])

.name;

export default componentModule;
