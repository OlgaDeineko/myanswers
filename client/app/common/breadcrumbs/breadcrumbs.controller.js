class BreadcrumbsController {
  constructor($scope, $state, CategoryService) {
    'ngInject';

    this.name = 'breadcrumbs';
    let self = this;
    this.$state = $state;
    this.$scope = $scope;

    this.breadcrumbs = [];

    $scope.$watch(()=>{
      return self.current;
    }, () => {
      CategoryService.getAll()
        .then((result) => {
          let id = this.current;
          while (id != 1) {
            let category = result.find((c) => c.id == id);
            self.breadcrumbs.unshift(category);
            id = category.parent_id;
          }
          if(self.$scope.$root.$$phase != '$apply' && self.$scope.$root.$$phase != '$digest') self.$scope.$apply();

        })
    })
  }

  goTo(categoryId) {
    let stateName = (/^admin\./.test(this.$state.current.name) ? 'admin.category': 'visitor');
    this.$state.go(stateName, {"categoryId": categoryId});
  }
}

export default BreadcrumbsController;
