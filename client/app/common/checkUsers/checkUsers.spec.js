import CheckUsersModule from './checkUsers'
import CheckUsersController from './checkUsers.controller';
import CheckUsersComponent from './checkUsers.component';
import CheckUsersTemplate from './checkUsers.html';

describe('CheckUsers', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CheckUsersModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CheckUsersController();
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
      expect(CheckUsersTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CheckUsersComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(CheckUsersTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CheckUsersController);
      });
  });
});
