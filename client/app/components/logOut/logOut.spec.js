import LogOutModule from './logOut'
import LogOutController from './logOut.controller';
import LogOutComponent from './logOut.component';
import LogOutTemplate from './logOut.html';

describe('LogOut', () => {
  let $rootScope, makeController;

  beforeEach(window.module(LogOutModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new LogOutController();
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
      expect(LogOutTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = LogOutComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(LogOutTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(LogOutController);
      });
  });
});
