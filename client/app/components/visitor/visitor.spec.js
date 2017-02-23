import VisitorModule from './visitor'
import VisitorController from './visitor.controller';
import VisitorComponent from './visitor.component';
import VisitorTemplate from './visitor.html';

describe('Visitor', () => {
  let $rootScope, makeController;

  beforeEach(window.module(VisitorModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new VisitorController();
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
      expect(VisitorTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = VisitorComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(VisitorTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(VisitorController);
      });
  });
});
