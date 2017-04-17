class CheckUsersController {
  constructor() {
    this.name = 'checkUsers';
  }

  $onInit() {
    this.users.forEach((user) => {
      if (!this.updateMode) {
        this.selected.push(user.id);
      } else {
        if ((user.role == 'admin' || user.role == 'Super Admin') && this.selected.indexOf(user.id) == -1) {
          this.selected.push(user.id);
        }
      }
    })
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
