import ForgotPasswordModalModule from './forgotPasswordModal'
import ForgotPasswordModalController from './forgotPasswordModal.controller';
import ForgotPasswordModalComponent from './forgotPasswordModal.component';
import ForgotPasswordModalTemplate from './forgotPasswordModal.html';

describe('ForgotPasswordModal', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ForgotPasswordModalModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ForgotPasswordModalController();
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
      expect(ForgotPasswordModalTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ForgotPasswordModalComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ForgotPasswordModalTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ForgotPasswordModalController);
      });
  });
});
