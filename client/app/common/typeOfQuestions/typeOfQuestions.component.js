import template from './typeOfQuestions.html';
import controller from './typeOfQuestions.controller';
import './typeOfQuestions.scss';

let typeOfQuestionsComponent = {
  restrict: 'E',
  bindings: {
    articleCounts: "=",
  },
  template,
  controller
};

export default typeOfQuestionsComponent;
