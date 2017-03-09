import {aloglia} from '../../config';

let algoliasearch = require('algoliasearch');

class AlgoliaSearchController {
  constructor($scope, SessionService) {
    'ngInject';
    this.name = 'algoliaSearch';
    let self = this;

    this.$scope = $scope;

    this.algoliaResults = [];
    let index = SessionService.getSubdomain();

    this.index = new algoliasearch(aloglia.id, aloglia.key, {protocol: 'https:'}).initIndex(index);

    $scope.$watch(() => {return self.searchModel}, () => {
      /**
       * search in algolia
       */
      this.index.search({
        query: self.searchModel,
      }, (error, content) => {
        if (!error) {
          self.algoliaResults = content.hits.map((hit) => {
            hit._highlightResult.answer.value = String(hit._highlightResult.answer.value).replace(/<(?!\/?em)[^>]+>/gm, '');
            return hit
          });
          self.$scope.$apply();
        }
      });
    })

  }
}

export default AlgoliaSearchController;
