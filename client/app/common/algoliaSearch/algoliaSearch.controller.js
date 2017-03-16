import {algolia} from '../../config';

let algoliasearch = require('algoliasearch');
let algoliasearchHelper = require('algoliasearch-helper');

class AlgoliaSearchController {
  constructor($scope, SessionService) {
    'ngInject';
    this.name = 'algoliaSearch';
    let self = this;

    this.$scope = $scope;

    this.algoliaResults = [];
    let index = SessionService.getSubdomain();

    this.algolia = new algoliasearch(algolia.id, algolia.key, {protocol: 'https:'});

    $scope.$watch(() => {
      return self.searchModel
    }, () => {
      if(!self.searchModel) return;
      this.algoliaHelper.setQuery(self.searchModel).search();
    });

    $scope.$watch(() => {
      return self.category
    }, () => {
      if(!self.category) return;

      this.algoliaHelper = new algoliasearchHelper(this.algolia, index, {
        hierarchicalFacets: [{
          name: 'parent',
          attributes: [
            'hierarchicalCategories.lvl0',
            'hierarchicalCategories.lvl1',
            'hierarchicalCategories.lvl2'
          ],
          rootPath: this.category,
        }],
      });

      /**
       * search in algolia
       */
      this.algoliaHelper.on('result', function (content) {
        self.algoliaResults = content.hits.map((hit) => {
          hit._highlightResult.answer.value = String(hit._highlightResult.answer.value).replace(/<(?!\/?em)[^>]+>/gm, '');
          return hit
        });
        self.$scope.$apply();
      });
    })
  }
}

export default AlgoliaSearchController;
