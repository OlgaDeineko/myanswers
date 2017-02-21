class FaqController {
  constructor($sce, $state, ArticleService) {
    "ngInject";
    this.name = 'faq';

    let self = this;
    this.$state = $state;
    this.ArticleService = ArticleService;

    this.faq = {};

    this.ArticleService.getById($state.params.faqId)
      .then((result) => {
        //convert html to string @see{@link https://docs.angularjs.org/api/ng/directive/ngBindHtml}
        result.answer = $sce.trustAsHtml(result.answer);
        result.categories = result.categories[0];

        //counting words and character in article answer
        let answerWithoutTags = String(result.answer).replace(/<[^>]+>/gm, '');
        result.countWords = answerWithoutTags.trim().split(/\s+/).length;
        result.countChars = (answerWithoutTags.match(/\S/g) || []).length;

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
