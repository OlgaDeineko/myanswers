class BreadcrumbsController {
  constructor($state, CategoryService) {
    'ngInject';

    this.name = 'breadcrumbs';
    let self = this;
    this.$state = $state;

    this.breadcrumbs = [];

    CategoryService.getAll()
      .then((result) => {
        let id = this.current;
        while (id != 1) {
          let category = result.find((c) => c.id == id);
          self.breadcrumbs.unshift(category);
          id = category.parent_id;
        }
      })
  }

  goTo(categoryId) {
    this.$state.go(this.$state.current.name, {"categoryId": categoryId});
  }
}

export default BreadcrumbsController;
