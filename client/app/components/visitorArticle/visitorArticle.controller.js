class VisitorArticleController {
  constructor($sce, $state, toastr, ArticleService, SettingsService) {
    "ngInject";
    this.name = 'faq';

    this.$state = $state;
    this.toastr = toastr;

    this.currentCategoryId = $state.params.categoryId || 1;

    this.convertHTML = $sce.trustAsHtml;

    this.SettingsService = SettingsService;
    this.ArticleService = ArticleService;

    this.faq = {};

    let isAlgoliaObject = $state.current.name == 'visitorArticleAlgolia';
    this.ArticleService.getById($state.params.faqId, isAlgoliaObject)
      .then((result) => {
        this.faq = result;
        if (isAlgoliaObject) {
          this.currentCategoryId = result.categoryId;
        }
      })
      .catch((error) => {
        error.data.errors.forEach((error) => {
          this.toastr.error(error.message);
          this.$state.go('visitor');
        });
      });
  }

  copyToClipboard() {
    this.toastr.success('Answer copied to clipboard.');
  }
}

export default VisitorArticleController;
