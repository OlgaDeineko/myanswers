import ChooseSubdomainModalModule from './chooseSubdomainModal'
import ChooseSubdomainModalController from './chooseSubdomainModal.controller';
import ChooseSubdomainModalComponent from './chooseSubdomainModal.component';
import ChooseSubdomainModalTemplate from './chooseSubdomainModal.html';

describe('ChooseSubdomainModal', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ChooseSubdomainModalModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ChooseSubdomainModalController();
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
      expect(ChooseSubdomainModalTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ChooseSubdomainModalComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ChooseSubdomainModalTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ChooseSubdomainModalController);
      });
  });
});
