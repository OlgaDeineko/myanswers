import RegistrationModule from './registration'
import RegistrationController from './registration.controller';
import RegistrationComponent from './registration.component';
import RegistrationTemplate from './registration.html';

describe('Registration', () => {
  let $rootScope, makeController;

  beforeEach(window.module(RegistrationModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new RegistrationController();
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
      expect(RegistrationTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = RegistrationComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(RegistrationTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(RegistrationController);
      });
  });
});
