class VisitorArticleController {
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

    this.faq = {};

    if (/(-a)$/.test($state.params.faqId)) {
      this.ArticleService.getByAlgoliaId($state.params.faqId.replace(/(-a)$/, ''))
        .then((result) => {
          self.faq = result;
        }, (error) => {
          error.data.errors.forEach((error) => {
            self.toastr.error(error.description);
            self.$state.go('visitor');
          });
        })
    } else {
      this.ArticleService.getById($state.params.faqId)
        .then((result) => {
          self.faq = result;
        }, (error) => {
          error.data.errors.forEach((error) => {
            self.toastr.error(error.description);
            self.$state.go('visitor');
          });
        })
    }
  }

  copyToClipboard() {
    this.toastr.success('Answer copied to clipboard.');
  }
}

export default VisitorArticleController;
