class RoleAccessesDirective {
  constructor(PermPermissionStore) {
    this.restrict = 'A';

    this.PermPermissionStore = PermPermissionStore;
  }

  link($scope, $element, $attr) {
    let self = this;
    $scope.roleAccesses = $scope.$eval($attr.roleAccesses);

    $scope.$watch('roleAccesses', function () {
      $element.removeAttr('disabled');
      $element.removeClass('disabled');

      if ($scope.roleAccesses.hasOwnProperty('only')) {
        if ($scope.roleAccesses.hasOwnProperty('excluded')) {
          delete $scope.roleAccesses['excluded'];
        }
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

      if ($scope.roleAccesses.hasOwnProperty('excluded')) {
        let check = false;
        $scope.roleAccesses.excluded.forEach((item) => {
          if (self.PermPermissionStore.hasPermissionDefinition(item) &&
            self.PermPermissionStore.getPermissionDefinition(item).validationFunction[2]()
          ) {
            check = true;
          }
        });

        if (check) {
          $element.remove();
          return;
        }
      }

      if ($scope.roleAccesses.hasOwnProperty('disabled')) {
        let check = false;
        $scope.roleAccesses.disabled.forEach((item) => {
          let isDisabled = self.PermPermissionStore.hasPermissionDefinition(item) && self.PermPermissionStore.getPermissionDefinition(item).validationFunction[2]();
          if ($scope.roleAccesses.hasOwnProperty('orDisabled')) {
            isDisabled = isDisabled || $scope.roleAccesses.orDisabled;
          }
          if ($scope.roleAccesses.hasOwnProperty('andDisabled')) {
            isDisabled = isDisabled && $scope.roleAccesses.andDisabled;
          }
          if (isDisabled) {
            check = true;
          }
        });

        if (check) {
          $element.attr('disabled', 'disabled');
          $element.addClass('disabled');
        }
      }
    })
  }
}


export default (PermPermissionStore) => {
  'ngInject';
  return new RoleAccessesDirective(PermPermissionStore);
}
