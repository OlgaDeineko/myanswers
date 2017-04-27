let SpinnerFactory = function ($rootScope) {
  'ngInject';
  this.spinner = 0;

  /**
   * start(add) spinner
   */
  let start = () => {
    this.spinner++;
  };

  /**
   * end(remove) spinner
   */
  let end = () => {
    this.spinner--;
  };

  /**
   * remove all spinner
   */
  let reject = () => {
    this.spinner = 0;
  };

  /**
   * is active loading
   * @returns {boolean}
   */
  let hasSpinner = () => {
    return this.spinner > 0;
  };

  return {
    start,
    end,
    reject,
    hasSpinner
  };
};

export default SpinnerFactory;
