class FaqController {
  constructor($sce, $state, toastr, ArticleService, SettingsService, FilesService) {
    "ngInject";
    this.name = 'FAQ.TITLE';

    this.$state = $state;
    this.toastr = toastr;

    this.SettingsService = SettingsService;
    this.ArticleService = ArticleService;
    this.FilesService = FilesService;

    this.convertHTML = $sce.trustAsHtml;
    this.faq = null;

    this.ArticleService.getById($state.params.faqId)
      .then((result) => {
        this.faq = result;
      }, (error) => {
        error.data.errors.forEach((error) => {
          this.toastr.error(error.message);
          this.$state.go('admin.category');
        });
      })
  }

  goTo() {
    this.$state.go("admin.editFaq", this.$state.params);
  }
}

export default FaqController;
