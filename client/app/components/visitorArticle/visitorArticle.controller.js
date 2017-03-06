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
    this.visitor = $state.current.name == 'faqVisitor';


    this.faq = {};

    this.SettingsService.getSettings().then(result => {
      self.languages = result.languages;

      if(/(-a)$/.test($state.params.faqId)){

        self.ArticleService.getByAlgoliaId($state.params.faqId.replace(/(-a)$/, ''))
          .then((result) => {
            if (!result.id) {
              self.$state.go('admin.category');
            }

            result.lang = self.languages.find(l => l.code == result.lang).name;

            self.faq = result;
          })
      }else {

        self.ArticleService.getById($state.params.faqId)
          .then((result) => {
            if (!result.id) {
              self.$state.go('admin.category');
            }

            result.lang = self.languages.find(l => l.code == result.lang).name;

            self.faq = result;
          })
      }
    })
  }

  copyToClipboard() {
    this.toastr.success('Answer copied to clipboard.');
  }
}

export default VisitorArticleController;
