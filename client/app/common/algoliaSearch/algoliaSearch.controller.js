class AlgoliaSearchController {
  constructor($scope, AlgoliaService, SettingsService) {
    'ngInject';
    this.name = 'algoliaSearch';

    this.algoliaResults = [];
    this.searching = AlgoliaService.initSearching((content) => {
      this.algoliaResults = content.hits.map((hit) => {
        hit._highlightResult.answer.value = String(hit._highlightResult.answer.value).replace(/<(?!\/?em)[^>]+>/gm, '');
        return hit
      });
      $scope.$apply();
    });
    this.searching.visibleArticles = SettingsService.getVisibleArticles();


    $scope.$watch(() => {
      return this.searchModel;
    }, (searchModel) => {
      this.searching.hierarchicalCategory = this.category;
      this.searching.search(searchModel);
    });
  }
}

export default AlgoliaSearchController;
