class BreadcrumbsController {
  constructor($state, CategoryService) {
    'ngInject';
    this.name = 'breadcrumbs';
    this.$state = $state;
    this.breadcrumbs = [];
    let self = this;

    CategoryService.getAll().then(r => {
      self.categories = r;
      let id = this.current;
      while(id != 1){
        let category = self.categories.find(c => c.id == id);
        self.breadcrumbs.unshift(category);
        id = category.parent_id;
      }
    })
  }

  goTo(categoryId){
    this.$state.go(this.$state.current.name, {"categoryId": categoryId });
  }
}

export default BreadcrumbsController;
