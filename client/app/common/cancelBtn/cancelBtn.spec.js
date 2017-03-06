import CancelBtnModule from './cancelBtn'
import CancelBtnController from './cancelBtn.controller';
import CancelBtnComponent from './cancelBtn.component';
import CancelBtnTemplate from './cancelBtn.html';

describe('CancelBtn', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CancelBtnModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CancelBtnController();
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
      expect(CancelBtnTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CancelBtnComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(CancelBtnTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CancelBtnController);
      });
  });
});
