class FaqController {
  constructor($sce, $state, toastr, ArticleService, SettingsService, FilesService) {
    "ngInject";
    this.name = 'faq';

    let self = this;
    this.$state = $state;
    this.toastr = toastr;
    this.convertHTML = $sce.trustAsHtml;
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
            self.$state.go('admin.category');
          }

          result.lang = self.languages.find(l => l.code == result.lang).name;

          self.faq = result;
        })
    })
  }

  goTo() {
    this.$state.go("admin.editFaq", this.$state.params);
  }

  copyToClipboard() {
    this.toastr.success('Answer copied to clipboard.');
  }
}

export default FaqController;
