class ArticleTreeController {
  constructor($state, ArticleService) {
    "ngInject";

    this.name = 'articleTree';
    this.$state = $state;
    this.ArticleService = ArticleService;
  }

  moveTo(state, faqId){
    this.$state.go(state, {"faqId": faqId });
  }

  removeArticle(faqId){
    this.ArticleService.remove(faqId)
  }
}

export default ArticleTreeController;
