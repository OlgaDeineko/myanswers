import angular from 'angular';
import typeOfQuestionsComponent from './typeOfQuestions.component';

let typeOfQuestionsModule = angular.module('typeOfQuestions', [])
  .component('typeOfQuestions', typeOfQuestionsComponent)
  .name;

export default typeOfQuestionsModule;
