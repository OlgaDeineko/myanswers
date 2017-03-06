class UsersController {
  constructor($scope, $uibModal, NgTableParams, toastr, UsersService) {
    'ngInject';
    this.name = 'Users';

    this.$uibModal = $uibModal;
    this.toastr = toastr;

    this.UsersService = UsersService;

    this.users = [];
    this.NgTableParams = NgTableParams;

    $scope.$on('updateUsers', () => {
      console.log('$on: updateUsers');
      this.getData(this, true);
    });

    this.getData(this);
  }

  create() {
    let modalInstance = this.$uibModal.open({
      component: 'createUserModal'
    });
  };

  remove(userId) {
    console.log('remove', userId);
    //this.toastr.success('User removed successfully.');
    // this.UsersService.remove(userId)
  }

  edit(user) {
    this.$uibModal.open({
      component: 'createUserModal',
      resolve: {
        user: user
      }
    });
  }

  getData(self, update) {
    self.UsersService.getAll(update).then(result => {
      self.users = result;

      self.tableParams = new self.NgTableParams({
        count: 15,
      }, {
        counts: [],
        dataset:  self.users,
      });
    })
  }
}

export default UsersController;
