import CreateCategoryModalModule from './createCategoryModal'
import CreateCategoryModalController from './createCategoryModal.controller';
import CreateCategoryModalComponent from './createCategoryModal.component';
import CreateCategoryModalTemplate from './createCategoryModal.html';

describe('CreateCategoryModal', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CreateCategoryModalModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CreateCategoryModalController();
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
      expect(CreateCategoryModalTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CreateCategoryModalComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(CreateCategoryModalTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CreateCategoryModalController);
      });
  });
});
