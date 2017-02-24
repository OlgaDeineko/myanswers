let parseTreeCategory = (categories) => {
  categories.forEach((category, i) => {
    categories[i].categories = categories.filter(c => c.parent_id == category.id);
  });
  return categories;
};

let filterArticles = (articles, categoryId) => {
  return articles.filter(article => article.categories.find(c => c.id == categoryId));
};

let filterCategories = (categories, categoryId) => {
  return categories.filter(c => c.id == categoryId);
};
let algoliasearch = require('algoliasearch');
class VisitorController {
  constructor($window, $stateParams, $scope, AuthenticationService, CategoryService, ArticleService, SessionService) {
    'ngInject';

    this.name = 'Welcome to KB';
    this.uncategoryId = 1;
    let self = this;

    let id = 'I9WKUNVPGV';
    let key = '5a6dbbf12e7c8d629d22ec3197fe0186';
    let index = SessionService.getSubdomain();
    this.algoliaResults = [];

    this.index = new algoliasearch(id, key, {protocol: 'https:'}).initIndex(index);

    this.$window = $window;
    this.$scope = $scope;
    this.AuthenticationService = AuthenticationService;
    this.ArticleService = ArticleService;
    this.CategoryService = CategoryService;
    this.currentCategory = $stateParams.categoryId || this.uncategoryId;

    this.categories = [];
    this.categoriesArr = [];
    this.articles = [];

    this.getAllData(this);
  }

  logout() {
    this.AuthenticationService.logOut();
    if (this.$window.location.host.indexOf('localhost') != -1) {
      this.$window.location.href = `http://main.localhost:3000/subdomain`;
    } else
      this.$window.location.href = `http://main.myanswers.io/subdomain`;
  }

  search(text) {
    let self = this;
    this.index.search({
      query: text,
    }, (err, content) => {
      self.algoliaResults = content.hits
        .map(i => {
          i._highlightResult.answer.value = String(i._highlightResult.answer.value).replace(/<(?!\/?em)[^>]+>/gm, '');
          return i
        });
      self.$scope.$apply();
    });
  }

  getAllData(self, update) {
    self.CategoryService.getAll(update)
      .then((result) => {
        console.log('norm', result)
        self.categoriesArr = result;
        let categoriesTree = parseTreeCategory(result);
        self.categories = filterCategories(categoriesTree, self.currentCategory);
      })
      .catch((error) => {
        console.warn('Error request:', error);
      });
    self.ArticleService.getAll()
      .then(result => {
        self.articles = filterArticles(result, self.currentCategory);
      })
      .catch((error) => {
        console.warn('Error request:', error);
      })
  };
}

export default VisitorController;
