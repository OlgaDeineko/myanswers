import angular from 'angular';
import Login from './login/login';
import Home from './home/home';
import About from './about/about';

let componentModule = angular.module('app.components', [
  Login,
  Home,
  About
])

.name;

export default componentModule;
