class UsersController {
  constructor($scope, $uibModal, $filter, NgTableParams, toastr, UsersService) {
    'ngInject';
    this.name = 'USERS.TITLE';
    let self = this;

    this.$uibModal = $uibModal;
    this.toastr = toastr;
    this.translate = $filter('translate');

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
    this.$uibModal.open({
      component: 'createUserModal'
    });
  };

  remove(userId) {
    let self = this;
    console.log('remove', userId);
    this.UsersService.remove(userId)
      .then((result) => {
        self.toastr.success(self.translate('MESSAGES.USER_REMOVED'));
      })
  }

  edit(user) {
    this.$uibModal.open({
      component: 'createUserModal',
      resolve: {
        user: user
      }
    });
  }

  disabled(user, status) {
    let self = this;
    user.status = status;
    this.UsersService.update(user)
      .then((result) => {
        self.toastr.success(self.translate('MESSAGES.USER_STATUS_CHANGED'));
      })
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
