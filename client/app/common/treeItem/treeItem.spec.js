import TreeItemModule from './treeItem'
import TreeItemController from './treeItem.controller';
import TreeItemComponent from './treeItem.component';
import TreeItemTemplate from './treeItem.html';

describe('TreeItem', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TreeItemModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TreeItemController();
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
      expect(TreeItemTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = TreeItemComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(TreeItemTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TreeItemController);
      });
  });
});
