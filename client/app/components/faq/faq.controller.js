class FaqController {
  constructor($sce, $state, ArticleService, SettingsService) {
    "ngInject";
    this.name = 'faq';

    let self = this;
    this.$state = $state;
    this.ArticleService = ArticleService;

    this.faq = {};

    this.ArticleService.getById($state.params.faqId)
      .then((result) => {
        if(!result.id){
          self.$state.go('category');
        }
        //convert html to string @see{@link https://docs.angularjs.org/api/ng/directive/ngBindHtml}
        result.answer = $sce.trustAsHtml(result.answer);
        result.categories = result.categories[0];
        if(result.lang)
          result.lang = SettingsService.getLanguages().find(l => l.code == result.lang).name;

        //counting words and character in article answer
        result.answerWithoutTags = String(result.answer).replace(/<[^>]+>/gm, '');
        result.countWords = result.answerWithoutTags.trim().split(/\s+/).length;
        result.countChars = (result.answerWithoutTags.match(/\S/g) || []).length;

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
