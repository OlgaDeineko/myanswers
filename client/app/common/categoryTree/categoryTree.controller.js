class CategoryTreeController {
  constructor($state) {
    "ngInject";

    this.$state = $state;
    this.name = 'categoryTree';
  }

  toogle(scope) {
    console.log(scope);
    scope.toggle();
  }

  moveTo(categoryId){
    this.$state.go("category", {"categoryId": categoryId });
  }

}

export default CategoryTreeController;
