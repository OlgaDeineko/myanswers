class FaqController {
  constructor($sce, $state, FaqService) {
    "ngInject";
    this.name = 'faq';

    let self = this;
    this.$state = $state;
    this.FaqService = FaqService;

    this.faq = {};

    this.FaqService.getById($state.params.faqId)
      .then((result) => {
        result.answer = $sce.trustAsHtml(result.answer);
        self.faq = result;
      })
      .catch((error) => {
        console.warn('Error request:', error);
      });
  }

  goTo() {
    this.$state.go("editFaq", this.$state.params);
  }
}

export default FaqController;
