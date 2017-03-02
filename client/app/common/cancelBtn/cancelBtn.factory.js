let CancelBtnFactory = function (SessionService) {
  'ngInject';

  let setPreviousPage = (state, params) => {
    if (state.name && state.name != 'editFaq' && state.name != 'faq' && state.name != 'createFaq') {
      SessionService.setPreviousPage(state.name, params);
    }
  };

  let getPreviousPage = () => {
    return SessionService.getPreviousPage()
  };

  let isSetPrevious = () => {
    let state = getPreviousPage();
    if (state && state.stateName) {
      return true;
    }
    return false
  }

  return {
    setPreviousPage,
    getPreviousPage,
    isSetPrevious
  };
};

export default CancelBtnFactory;
