class NavbarController {
  constructor($state) {
    "ngInject";

    this.name = 'navbar';
    this.$state = $state;
  }

  logout() {
    this.$state.go("logout");
  }
}

export default NavbarController;
