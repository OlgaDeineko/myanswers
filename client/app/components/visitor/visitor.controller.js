import {mainDomain} from '../../config';

class VisitorController {
  constructor($window, $stateParams, $state, $scope, categoryHelper, AuthenticationService, CategoryService, ArticleService, SessionService) {
    'ngInject';

    this.name = 'Welcome to KB';

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

    this.getAllData(this);
  }

  logout() {
    this.AuthenticationService.logOut();
    this.$window.location.href = `http://main.${mainDomain}/subdomain`;
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
