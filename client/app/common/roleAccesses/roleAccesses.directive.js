class RoleAccessesDirective {
  constructor(PermPermissionStore) {
    this.restrict = 'A';

    this.PermPermissionStore = PermPermissionStore;
  }

  link($scope, $element, $attr) {
    let self = this;
    $scope.roleAccesses = $scope.$eval($attr.roleAccesses);

    $scope.$watch(function () {return $attr.roleAccesses}, function (roleAccesses) {
      roleAccesses = $scope.$eval(roleAccesses);
      $element.removeAttr('disabled');
      $element.removeClass('disabled');

      if (roleAccesses.hasOwnProperty('only')) {
        if (roleAccesses.hasOwnProperty('excluded')) {
          delete roleAccesses['excluded'];
        }
        let check = false;
        roleAccesses.only.forEach((item) => {
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

      if (roleAccesses.hasOwnProperty('excluded')) {
        let check = false;
        roleAccesses.excluded.forEach((item) => {
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

      if (roleAccesses.hasOwnProperty('disabled')) {
        let check = false;
        roleAccesses.disabled.forEach((item) => {
          let isDisabled = self.PermPermissionStore.hasPermissionDefinition(item) && self.PermPermissionStore.getPermissionDefinition(item).validationFunction[2]();
          if (roleAccesses.hasOwnProperty('orDisabled')) {
            isDisabled = isDisabled || roleAccesses.orDisabled;
          }
          if (roleAccesses.hasOwnProperty('andDisabled')) {
            isDisabled = isDisabled && roleAccesses.andDisabled;
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
