import ArticleTreeModule from './articleTree'
import ArticleTreeController from './articleTree.controller';
import ArticleTreeComponent from './articleTree.component';
import ArticleTreeTemplate from './articleTree.html';

describe('ArticleTree', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ArticleTreeModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ArticleTreeController();
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
      expect(ArticleTreeTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ArticleTreeComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ArticleTreeTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ArticleTreeController);
      });
  });
});
