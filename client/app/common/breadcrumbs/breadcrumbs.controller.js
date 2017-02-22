class BreadcrumbsController {
  constructor() {
    this.name = 'breadcrumbs';
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
}

export default BreadcrumbsController;
