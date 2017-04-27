class SpinnerController {
  constructor(spinnerFactory) {
    'ngInject';
    this.name = 'spinner';

    this.hasSpinner = spinnerFactory.hasSpinner;
  }
}

export default SpinnerController;
