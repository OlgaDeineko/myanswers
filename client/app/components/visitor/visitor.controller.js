import {algolia, mainDomain} from '../../config';

let algoliasearch = require('algoliasearch');
let algoliasearchHelper = require('algoliasearch-helper');

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

    this.algoliaIndex = SessionService.getSubdomain();
    this.algolia = new algoliasearch(algolia.id, algolia.key, {protocol: 'https:'});

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

      let id = self.currentCategory;
      self.categoryForAlgolia = '';
      self.categoriesArray = [];
      while (id != 0) {
        let category = categories.find((c) => c.id == id);
        self.categoriesArray.unshift(category.name);
        if(category.parent_id == 0){
          self.categoryForAlgolia = `${category.name}${self.categoryForAlgolia}`;
        }else{
          self.categoryForAlgolia = ` > ${category.name}${self.categoryForAlgolia}`;
        }
        id = category.parent_id;
      }

      self.tree = self.categoryHelper.buildTree(articles, categories, self.currentCategory);

      if(self.categoriesArray.length == 1){
        self.getArticles(self, self.categoriesArray[0]);
      }else{
        self.getArticles(self, `${self.categoriesArray[0]} > ${self.categoriesArray[1]}`);
      }


      self.$scope.$apply();
    })
  }

  getArticles(self, category) {
    let algoliaHelper = new algoliasearchHelper(self.algolia, self.algoliaIndex, {
      hierarchicalFacets: [{
        name: 'parent',
        attributes: [
          'hierarchicalCategories.lvl0',
          'hierarchicalCategories.lvl1',
          'hierarchicalCategories.lvl2'
        ],
        rootPath: category,
      }],
    });

    algoliaHelper.search();

    algoliaHelper.on('result', function (content) {
      self.articles = content.hits;
      self.$scope.$apply();
    });

  }
}

export default VisitorController;
