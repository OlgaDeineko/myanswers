class CategoryController {
  constructor($stateParams, $scope, ArticleService, SettingsService) {
    "ngInject";

    this.status = $stateParams.status;

    if (this.status && this.status != 'all') {
      this.name = `All ${this.status}s FAQ`;
    } else {
      this.name = `All FAQ`;
    }
    this.$scope = $scope;

    this.currentCategory = 1;
    this.ArticleService = ArticleService;
    this.SettingsService = SettingsService;

    $scope.$on('updateArticles', () => {
      console.log('$on: updateArticles');
      this.getAllData(this, true);
    });

    this.getAllData(this);
  }

  getCurentCategoryName() {
    return this.name;
  }

  getAllData(self, update) {
    self.ArticleService.getAll(update)
      .then(result => {
        self.SettingsService.getSettings().then(settings => {

          self.articlesCounts = {
            All: result.length,
          };
          settings.faq_statuses.map(status => {
            self.articlesCounts[status.name] = result.filter(a => a.status == status.code).length;
          })
        });

        self.tree = {
          articles: (self.status == 'all')
            ? result
            : result.filter(a => a.status == self.status)
        };

      })

  };

}

export default CategoryController;
