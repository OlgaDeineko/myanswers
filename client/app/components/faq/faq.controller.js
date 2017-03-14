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

    this.convertHTML = $sce.trustAsHtml;
    this.faq = {};

    this.ArticleService.getById($state.params.faqId)
      .then((result) => {
        self.faq = result;
      }, (error) => {
        error.data.errors.forEach((error) => {
          self.toastr.error(error.message);
          self.$state.go('admin.category');
        });
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
