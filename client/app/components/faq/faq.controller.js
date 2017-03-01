class FaqController {
  constructor($sce, $state, toastr, ArticleService, SettingsService, FilesService) {
    "ngInject";
    this.name = 'faq';

    let self = this;
    this.$state = $state;
    this.toastr = toastr;
    this.SettingsService = SettingsService;
    this.ArticleService = ArticleService;
    this.FilesService = FilesService;
    this.visitor = $state.current.name == 'faqVisitor';


    this.faq = {};

    this.SettingsService.getSettings().then(result => {
      self.languages = result.languages;

      self.ArticleService.getById($state.params.faqId)
        .then((result) => {
          if (!result.id) {
            self.$state.go('category');
          }
          //convert html to string @see{@link https://docs.angularjs.org/api/ng/directive/ngBindHtml}
          result.answer = $sce.trustAsHtml(result.answer);
          result.categories = result.categories[0];
          if (result.lang)
            result.lang = self.languages.find(l => l.code == result.lang).name;

          //counting words and character in article answer
          result.answerWithoutTags = String(result.answer).replace(/<[^>]+>/gm, '');
          result.countWords = result.answerWithoutTags.trim().split(/\s+/).length;
          result.countChars = (result.answerWithoutTags.match(/\S/g) || []).length;
          //@see http://marketingland.com/estimated-reading-times-increase-engagement-79830
          let time = (result.countWords/200+"").split('.');
          result.timeReads = `${time[0]} min ${((('.'+time[1])*60).toFixed())} sec`;

          self.faq = result;
          return result;
        })
    })
  }

  goTo() {
    this.$state.go("editFaq", this.$state.params);
  }

  copyToClipboard() {
    this.toastr.success('Answer copied to clipboard.');
  }
}

export default FaqController;
