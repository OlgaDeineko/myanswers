import TypeOfQuestionsModule from './typeOfQuestions'
import TypeOfQuestionsController from './typeOfQuestions.controller';
import TypeOfQuestionsComponent from './typeOfQuestions.component';
import TypeOfQuestionsTemplate from './typeOfQuestions.html';

describe('TypeOfQuestions', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TypeOfQuestionsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TypeOfQuestionsController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(TypeOfQuestionsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = TypeOfQuestionsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(TypeOfQuestionsTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TypeOfQuestionsController);
      });
  });
});
