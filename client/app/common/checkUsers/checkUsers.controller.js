class CheckUsersController {
  constructor() {
    this.name = 'checkUsers';
  }

  checkUser(userId){
    let idx = this.selected.indexOf(userId);

    if (idx > -1) {
      this.selected.splice(idx, 1);
    } else {
      this.selected.push(userId);
    }
  }
}

export default CheckUsersController;
