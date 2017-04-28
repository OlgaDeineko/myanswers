class UsersController {
  constructor($scope, $uibModal, $filter, NgTableParams, toastr, UsersService) {
    'ngInject';
    this.name = 'USERS.TITLE';

    this.$uibModal = $uibModal;
    this.toastr = toastr;
    this.translate = $filter('translate');

    this.UsersService = UsersService;

    this.users = [];
    this.NgTableParams = NgTableParams;

    $scope.$on('updateUsers', () => {
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
    this.UsersService.remove(userId)
      .then((result) => {
        this.toastr.success(this.translate('MESSAGES.USER_REMOVED'));
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
    user.status = status;
    this.UsersService.update(user)
      .then((result) => {
        this.toastr.success(this.translate('MESSAGES.USER_STATUS_CHANGED'));
      })
  }

  getData(update) {
    this.UsersService.getAll(update).then(result => {
      this.users = result;

      this.tableParams = new this.NgTableParams({
        count: 15,
      }, {
        counts: [],
        dataset:  this.users,
      });
    })
  }
}

export default UsersController;
