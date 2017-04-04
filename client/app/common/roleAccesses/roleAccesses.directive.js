class RoleAccessesDirective {
  constructor(PermPermissionStore) {
    this.restrict = 'A';
    this.scope = {
      roleAccesses: '=roleAccesses'
    };

    this.PermPermissionStore = PermPermissionStore;
  }

  link($scope, $element, $attr) {
    let self = this;

    if ($scope.roleAccesses.hasOwnProperty('only')) {
      let check = false;
      $scope.roleAccesses.only.forEach((item) => {
        if (self.PermPermissionStore.hasPermissionDefinition(item) &&
          self.PermPermissionStore.getPermissionDefinition(item).validationFunction[2]()
        ) {
          check = true;
        }
      });

      if (!check) {
        $element.remove();
        return;
      }
    }

    if ($scope.roleAccesses.hasOwnProperty('disabled')) {
      let check = false;
      $scope.roleAccesses.disabled.forEach((item) => {
        if (self.PermPermissionStore.hasPermissionDefinition(item) &&
          self.PermPermissionStore.getPermissionDefinition(item).validationFunction[2]()
        ) {
          check = true;
        }
      });

      if (check) {
        $element.attr('disabled', 'disabled');
      }
    }
  }
}


export default (PermPermissionStore) => {
  'ngInject';
  return new RoleAccessesDirective(PermPermissionStore);
}
