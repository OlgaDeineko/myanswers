import CategoryModule from './category'
import CategoryController from './category.controller';
import CategoryComponent from './category.component';
import CategoryTemplate from './category.html';

describe('Category', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CategoryModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CategoryController();
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
      expect(CategoryTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CategoryComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(CategoryTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CategoryController);
      });
  });
});
