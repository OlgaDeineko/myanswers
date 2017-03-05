import CreateUserModalModule from './createUserModal'
import CreateUserModalController from './createUserModal.controller';
import CreateUserModalComponent from './createUserModal.component';
import CreateUserModalTemplate from './createUserModal.html';

describe('CreateUserModal', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CreateUserModalModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CreateUserModalController();
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
      expect(CreateUserModalTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CreateUserModalComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(CreateUserModalTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CreateUserModalController);
      });
  });
});
