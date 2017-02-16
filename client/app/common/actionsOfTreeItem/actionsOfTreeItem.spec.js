import ActionsOfTreeItemModule from './actionsOfTreeItem'
import ActionsOfTreeItemController from './actionsOfTreeItem.controller';
import ActionsOfTreeItemComponent from './actionsOfTreeItem.component';
import ActionsOfTreeItemTemplate from './actionsOfTreeItem.html';

describe('ActionsOfTreeItem', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ActionsOfTreeItemModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ActionsOfTreeItemController();
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
      expect(ActionsOfTreeItemTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ActionsOfTreeItemComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ActionsOfTreeItemTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ActionsOfTreeItemController);
      });
  });
});
