class UsersController {
  constructor($scope, $uibModal, NgTableParams, UsersService) {
    'ngInject';
    this.name = 'Users';

    this.$uibModal = $uibModal;
    this.UsersService = UsersService;
    this.users = [];
    this.NgTableParams = NgTableParams;

    this.getData(this);
    this.tableParams = {};

    $scope.$on('updateUsers', () => {
      console.log('$on: updateUsers');
      this.getData(this, true);
    });
  }

  create() {
    let modalInstance = this.$uibModal.open({
      component: 'createUserModal'
    });
  };

  remove(userId) {
    console.log('remove', userId);
    // this.UsersService.remove(userId)
  }

  edit(user) {
    let modalInstance = this.$uibModal.open({
      component: 'createUserModal',
      resolve: {
        user: user
      }
    });
  }

  getData(self, update) {
    self.UsersService.getAll(update).then(result => {
      self.users = result.map(u => {
        u.role = u.role[0];
        return u;
      });

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
