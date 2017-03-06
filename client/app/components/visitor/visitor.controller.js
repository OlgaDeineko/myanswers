import {aloglia, mainDomain} from '../../config';

let algoliasearch = require('algoliasearch');

class VisitorController {
  constructor($window, $stateParams, $state, $scope, categoryHelper, AuthenticationService, CategoryService, ArticleService, SessionService) {
    'ngInject';

    this.name = 'Welcome to KB';

    let index = SessionService.getSubdomain();

    this.index = new algoliasearch(aloglia.id, aloglia.key, {protocol: 'https:'}).initIndex(index);

    this.$window = $window;
    this.$scope = $scope;
    this.$state = $state;

    this.AuthenticationService = AuthenticationService;
    this.ArticleService = ArticleService;
    this.CategoryService = CategoryService;
    this.categoryHelper = categoryHelper;

    this.uncategoryId = 1;
    this.currentCategory = $stateParams.categoryId || this.uncategoryId;
    this.articles = [];
    this.algoliaResults = [];

    this.getAllData(this);
  }

  logout() {
    this.AuthenticationService.logOut();
    this.$window.location.href = `http://main.${mainDomain}/subdomain`;
  }

  /**
   * search in algolia
   * @param text
   */
  search(text) {
    let self = this;
    this.index.search({
      query: text,
    }, (error, content) => {
      if (!error) {
        self.algoliaResults = content.hits.map((hit) => {
          hit._highlightResult.answer.value = String(hit._highlightResult.answer.value).replace(/<(?!\/?em)[^>]+>/gm, '');
          return hit
        });
        self.$scope.$apply();
      }
    });
  }

  getAllData(self, update) {
    Promise.all([
      self.CategoryService.getAll(update),
      self.ArticleService.getAll(update)
    ]).then((result) => {
      let categories = result[0];
      let articles = result[1].filter((article) => article.status == 'published');

      self.articles = articles;
      self.tree = self.categoryHelper.buildTree(articles, categories, self.currentCategory);

      self.$scope.$apply();
    })
  }
}

export default VisitorController;
