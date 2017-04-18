class CheckUsersController {
  constructor(UsersService) {
    'ngInject';

    this.name = 'checkUsers';
    this.UsersService = UsersService;
  }

  $onInit() {
    this.UsersService.getAll()
      .then((result) => {
        if (this.parentUsers == 'all') {
          this.users = result;
        } else {
          this.users = result.filter(u => this.parentUsers.indexOf(u.id) > -1);
        }

        this.users.forEach((user) => {
          if (!this.updateMode) {
            this.selected.push(user.id);
          } else {
            if ((user.role == 'admin' || user.role == 'Super Admin') && this.selected.indexOf(user.id) == -1) {
              this.selected.push(user.id);
            }
          }
        })
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
