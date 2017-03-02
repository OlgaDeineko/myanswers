import VisitorArticleModule from './visitorArticle'
import VisitorArticleController from './visitorArticle.controller';
import VisitorArticleComponent from './visitorArticle.component';
import VisitorArticleTemplate from './visitorArticle.html';

describe('VisitorArticle', () => {
  let $rootScope, makeController;

  beforeEach(window.module(VisitorArticleModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new VisitorArticleController();
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
      expect(VisitorArticleTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = VisitorArticleComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(VisitorArticleTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(VisitorArticleController);
      });
  });
});
