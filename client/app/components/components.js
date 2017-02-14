import angular from 'angular';
import Login from './login/login';
import Registration from './registration/registration';
// import Dashboard from './dashboard/dashboard';
import Home from './home/home';
// import About from './about/about';

let componentModule = angular.module('app.components', [
  Login,
  Registration,
  // Dashboard,
  Home,
  // About
])

.name;

export default componentModule;
