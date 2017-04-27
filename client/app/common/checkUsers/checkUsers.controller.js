class CheckUsersController {
  constructor($scope, UsersService) {
    'ngInject';

    this.name = 'checkUsers';
    this.UsersService = UsersService;
    this.$scope = $scope;
  }

  $onInit() {
    this.UsersService.getAll()
      .then((result) => {
        this.users = result;
        if (this.parentUsers == 'all') {
          this.parentUsers = this.users.map(u => u.id);
        }

        this.users.forEach((user) => {
          let isAdmin = user.role == 'admin' || user.role == 'Super Admin';
          let inParentArray = this.parentUsers.indexOf(user.id) > -1;

          user.disabled = isAdmin || !inParentArray;

          if (!this.updateMode) {
            this.selected.push(user.id);
          } else {
            if ((user.role == 'admin' || user.role == 'Super Admin') && this.selected.indexOf(user.id) == -1) {
              this.selected.push(user.id);
            }
          }
        });

        if (this.$scope.$root.$$phase != '$apply' && this.$scope.$root.$$phase != '$digest') this.$scope.$apply();
      });
  }

  checkUser(userId) {
    let idx = this.selected.indexOf(userId);

    if (idx > -1) {
      this.selected.splice(idx, 1);
    } else {
      this.selected.push(userId);
    }
  }
}

export default CheckUsersController;
