import config, {aloglia} from '../../config';

import faqHelper from '../../helpers/faq';

let buildTree = (articles, categories, currentCategory ) => {
  categories.forEach((category, i) => {
    categories[i].categories = categories.filter(c => c.parent_id == category.id);
    categories[i].articles = articles.filter(a => a.categories.find(c => c.id == category.id));
  });

  return categories.find(c => c.id == currentCategory)
}

let algoliasearch = require('algoliasearch');
class VisitorController {
  constructor($window, $stateParams, $state, $scope, AuthenticationService, CategoryService, ArticleService, SessionService, cancelBtn) {
    'ngInject';

    this.name = 'Welcome to KB';
    this.uncategoryId = 1;
    let self = this;

    let index = SessionService.getSubdomain();
    this.algoliaResults = [];

    this.cancelBtn = cancelBtn;
    this.index = new algoliasearch(aloglia.id, aloglia.key, {protocol: 'https:'}).initIndex(index);

    this.$window = $window;
    this.$scope = $scope;
    this.$state = $state;
    this.AuthenticationService = AuthenticationService;
    this.ArticleService = ArticleService;
    this.CategoryService = CategoryService;
    this.currentCategory = $stateParams.categoryId || this.uncategoryId;

    this.categories = [];
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
    Promise.all([
      self.CategoryService.getAll(update),
      self.ArticleService.getAll(update)
    ]).then(res => {
      if (res.length != 2) {
        return;
      }
      let categories = res[0];
      let articles = res[1];

      self.articles = articles.filter(a => a.status == 'published');
      self.tree = buildTree(self.articles, categories, self.currentCategory);

      self.$scope.$apply();
    })
  }

  cancel() {
    let previous = this.cancelBtn.getPreviousPage();
    if(previous.stateName) {
      this.$state.go(previous.stateName, previous.params);
    }
  }
}

export default VisitorController;
