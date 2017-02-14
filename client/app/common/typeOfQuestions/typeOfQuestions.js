import angular from 'angular';
import uiRouter from 'angular-ui-router';
import typeOfQuestionsComponent from './typeOfQuestions.component';

let typeOfQuestionsModule = angular.module('typeOfQuestions', [
  uiRouter
])

.component('typeOfQuestions', typeOfQuestionsComponent)

.name;

export default typeOfQuestionsModule;
