class CategoryTreeController {
  constructor($state, $scope) {
    "ngInject";

    this.$scope = $scope;
    this.$state = $state;
    this.name = 'categoryTree';
  }

  toggleChildren(scope) {
    if (!scope.$nodeScope.$modelValue.categories) {
      scope.$nodeScope.$modelValue.getList("categories").then(function(data) {
        scope.$nodeScope.$modelValue.categories = data;
        if (scope.$nodeScope.$modelValue.categories.length > 0) {
          scope.toggle();
        }
      });
    } else {
      if (scope.$nodeScope.$modelValue.categories.length > 0) {
        scope.toggle();
      }
    }
  }

  moveTo(categoryId){
    this.$state.go("category", {"categoryId": categoryId });
  }

}

export default CategoryTreeController;
