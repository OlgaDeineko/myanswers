import ActivationUserModule from './activationUser'
import ActivationUserController from './activationUser.controller';
import ActivationUserComponent from './activationUser.component';
import ActivationUserTemplate from './activationUser.html';

describe('ActivationUser', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ActivationUserModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ActivationUserController();
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
      expect(ActivationUserTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ActivationUserComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ActivationUserTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ActivationUserController);
      });
  });
});
