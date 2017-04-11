class TypeOfQuestionsController {
  constructor(ArticleService) {
    'ngInject'
    this.name = 'Questions';
    this.ArticleService = ArticleService;
  }
}

export default TypeOfQuestionsController;
