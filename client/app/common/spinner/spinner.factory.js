let SpinnerFactory = function ($rootScope) {
  'ngInject';
  //TODO: remove $rootScope
  $rootScope.spinner = [];

  /**
   * start(add) spinner
   */
  let start = () => {
    $rootScope.spinner.push(true);
  };

  /**
   * end(remove) spinner
   */
  let end = () => {
    $rootScope.spinner.splice(0, 1);
  };

  /**
   * remove all spinner
   */
  let reject = () => {
    $rootScope.spinner = [];
  };

  return {
    start,
    end,
    reject
  };
};

export default SpinnerFactory;
