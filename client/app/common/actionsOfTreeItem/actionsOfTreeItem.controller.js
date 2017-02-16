class ActionsOfTreeItemController {
  constructor($state) {
    "ngInject";

    this.$state = $state;
    this.name = 'actionsOfTreeItem';
  }

  moveTo(categoryId){
    let self = this;
    this.$state.go("category", {"categoryId": self.category.node_id });
  }
}

export default ActionsOfTreeItemController;
