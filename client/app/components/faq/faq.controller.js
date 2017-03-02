class FaqController {
  constructor($sce, $state, toastr, ArticleService, SettingsService, FilesService, cancelBtn) {
    "ngInject";
    this.name = 'faq';

    let self = this;
    this.$state = $state;
    this.toastr = toastr;
    this.convertHTML = $sce.trustAsHtml;
    this.SettingsService = SettingsService;
    this.ArticleService = ArticleService;
    this.FilesService = FilesService;
    this.cancelBtn = cancelBtn;
    this.visitor = $state.current.name == 'faqVisitor';


    this.faq = {};

    this.SettingsService.getSettings().then(result => {
      self.languages = result.languages;

      self.ArticleService.getById($state.params.faqId)
        .then((result) => {
          if (!result.id) {
            self.$state.go('category');
          }

          result.lang = self.languages.find(l => l.code == result.lang).name;

          self.faq = result;
        })
    })
  }

  goTo() {
    this.$state.go("editFaq", this.$state.params);
  }

  copyToClipboard() {
    this.toastr.success('Answer copied to clipboard.');
  }

  cancel() {
    let previous = this.cancelBtn.getPreviousPage();
    if(previous.stateName) {
      this.$state.go(previous.stateName, previous.params);
    }
  }
}

export default FaqController;
