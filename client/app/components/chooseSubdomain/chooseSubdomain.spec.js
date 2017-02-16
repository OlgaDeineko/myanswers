import ChooseSubdomainModule from './chooseSubdomain'
import ChooseSubdomainController from './chooseSubdomain.controller';
import ChooseSubdomainComponent from './chooseSubdomain.component';
import ChooseSubdomainTemplate from './chooseSubdomain.html';

describe('ChooseSubdomain', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ChooseSubdomainModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ChooseSubdomainController();
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
      expect(ChooseSubdomainTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ChooseSubdomainComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ChooseSubdomainTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ChooseSubdomainController);
      });
  });
});
