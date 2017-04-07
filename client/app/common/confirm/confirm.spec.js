import ConfirmModule from './confirm'
import ConfirmController from './confirm.controller';
import ConfirmComponent from './confirm.component';
import ConfirmTemplate from './confirm.html';

describe('Confirm', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ConfirmModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ConfirmController();
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
      expect(ConfirmTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ConfirmComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ConfirmTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ConfirmController);
      });
  });
});
