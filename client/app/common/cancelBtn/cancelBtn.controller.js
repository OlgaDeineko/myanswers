class CancelBtnController {
  constructor($state, SessionService) {
    'ngInject';
    this.name = 'cancelBtn';

    this.$state = $state;

    this.SessionService = SessionService;

    this.isSetPrevious = false;

    let state = SessionService.previousPage.data;
    if (state && state.stateName) {
      this.isSetPrevious = true;
    }

    this.SessionService = SessionService;
  }

/*
  let setPreviousPage = (state, params) => {
  if (state.name && state.name != 'admin.editFaq' && state.name != 'admin.faq' && state.name != 'admin.createFaq') {
    SessionService.setPreviousPage(state.name, params);
  }
};
*/

  cancel() {
    let previous = this.SessionService.previousPage.data;
    if(previous.stateName) {
      this.$state.go(previous.stateName, previous.params);
    }
  }
}

export default CancelBtnController;
