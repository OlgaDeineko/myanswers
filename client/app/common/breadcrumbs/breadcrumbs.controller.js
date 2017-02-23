class BreadcrumbsController {
  constructor($state) {
    'ngInject';
    this.name = 'breadcrumbs';
    this.$state = $state;
    this.breadcrumbs = [];
  }

  $onInit (){
    let id = this.current;

    while(id != 1){
      let category = this.categories.find(c => c.id == id);
      this.breadcrumbs.unshift(category);
      id = category.parent_id;
    }
  };

  goTo(categoryId){
    this.$state.go(this.$state.current.name, {"categoryId": categoryId });
  }
}

export default BreadcrumbsController;
