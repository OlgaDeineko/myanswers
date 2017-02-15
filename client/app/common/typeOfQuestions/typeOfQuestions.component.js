import template from './typeOfQuestions.html';
import controller from './typeOfQuestions.controller';
import './typeOfQuestions.scss';

let typeOfQuestionsComponent = {
  restrict: 'E',
  bindings: {
    articles: "=",
  },
  template,
  controller
};

export default typeOfQuestionsComponent;
