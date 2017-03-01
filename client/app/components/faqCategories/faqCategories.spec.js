import FaqCategoriesModule from './faqCategories'
import FaqCategoriesController from './faqCategories.controller';
import FaqCategoriesComponent from './faqCategories.component';
import FaqCategoriesTemplate from './faqCategories.html';

describe('FaqCategories', () => {
  let $rootScope, makeController;

  beforeEach(window.module(FaqCategoriesModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new FaqCategoriesController();
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
      expect(FaqCategoriesTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = FaqCategoriesComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(FaqCategoriesTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(FaqCategoriesController);
      });
  });
});
