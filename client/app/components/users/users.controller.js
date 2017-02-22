class UsersController {
  constructor($uibModal, NgTableParams, UsersService) {
    'ngInject';
    this.name = 'Users';
    let self = this;

    this.$uibModal = $uibModal;
    this.UsersService = UsersService;

    this.tableParams = new NgTableParams({}, {
      counts: [],
      getData: function (params) {
        return self.UsersService.getAll().then(result => {
          result = result.map(u => {
            u.role = u.role[0];
            return u;
          } );

          return result;
        })
      }
    });
  }

  create () {
    let modalInstance = this.$uibModal.open({
      component: 'createUserModal'
    });
  };

  remove(userId){
    let self = this;
    console.log('remove', userId);

    // self.UsersService.remove(userId)
    //   .then((result) => {
    //   })
  }

  edit(user){
    let self = this;
    console.log('edit', user);
    let modalInstance = this.$uibModal.open({
      component: 'createUserModal',
      resolve: {
        user: user
      }
    });
  }
}

export default UsersController;
