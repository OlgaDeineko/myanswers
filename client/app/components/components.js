import angular from 'angular';
import Login from './login/login';
import Registration from './registration/registration';
import Dashboard from './dashboard/dashboard'; //old version clon category !!TODO need removed
import Category from './category/category';
import Home from './home/home';
import About from './about/about';

let componentModule = angular.module('app.components', [
  Login,
  Registration,
  Category,
  Dashboard,
  Home,
  About
])

.name;

export default componentModule;
