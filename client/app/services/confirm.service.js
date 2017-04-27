function ConfirmService($uibModal) {
  "ngInject";

  /**
   * open confirm alert
   * @param text - message
   * @param {function=} onOk - success callback
   * @param {function=} onCancel - reject callback
   */
  let open = (text, onOk, onCancel = null) => {
    let modalInstance = $uibModal.open({
      component: 'confirmComponent',
      resolve: {
        text: function () {
          return text;
        }
      }
    });

    modalInstance.result.then(
      () => {
        if (typeof onOk == 'function') {
          onOk();
        }
      },
      () => {
        if (typeof onCancel == 'function') {
          onCancel();
        }
      }
    )
  };

  return {
    open
  }
}

export default ConfirmService;
