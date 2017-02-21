class ActionsOfTreeItemController {
  constructor($state, $uibModal, CategoryService) {
    "ngInject";
//TODO: Remove this component
    this.$state = $state;
    this.name = 'actionsOfTreeItem';
    this.CategoryService = CategoryService;
    this.$uibModal = $uibModal;
  }

  moveTo(categoryId){
    let self = this;
    this.$state.go("category", {"categoryId": self.category.id });
  }

  remove(){
    let self = this;

    self.CategoryService.remove(self.category.id)
      .then((result) => {
      })
  }

  edit(){
    let self = this;
    let modalInstance = this.$uibModal.open({
      component: 'createCategoryModal',
      resolve: {
        category: self.category
      }
    });
  }
}

export default ActionsOfTreeItemController;
