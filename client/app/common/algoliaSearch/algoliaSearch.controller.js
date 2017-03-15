import {aloglia} from '../../config';

let algoliasearch = require('algoliasearch');
// let algoliasearchHelper = require('algoliasearch-helper');

class AlgoliaSearchController {
  constructor($scope, SessionService) {
    'ngInject';
    this.name = 'algoliaSearch';
    let self = this;

    this.$scope = $scope;

    this.algoliaResults = [];
    let index = SessionService.getSubdomain();

    this.index = new algoliasearch(aloglia.id, aloglia.key, {protocol: 'https:'}).initIndex(index);

    // this.helper = new algoliasearchHelper(this.index, index, {
    //   hierarchicalFacets: [{
    //     name: 'parent',
    //     attributes: [
    //       'hierarchicalCategories.lvl0',
    //       'hierarchicalCategories.lvl1',
    //       'hierarchicalCategories.lvl2'],
    //     // rootPath: 'root',
    //   }],
    //   //   hitsPerPage: 20
    //   // hitsPerPage: 5,
    //   // maxValuesPerFacet: 5
    //   //   facets: ['hierarchicalCategories.lvl0', 'hierarchicalCategories.lvl1', 'hierarchicalCategories.lvl2']
    //   //   disjunctiveFacets: ['categories', 'author']
    // }
    // )

    // this.helper.on('result', function (content) {
    //   console.log('content', content)
    //   // console.log('content', content.getFacetValues('parent', 'root > test1'))
    //   self.algoliaResults = content.hits.map((hit) => {
    //     hit._highlightResult.answer.value = String(hit._highlightResult.answer.value).replace(/<(?!\/?em)[^>]+>/gm, '');
    //     return hit
    //   });
    //   self.$scope.$apply();
    // });


    $scope.$watch(() => {
      return self.searchModel
    }, () => {
      /**
       * search in algolia
       */
      // // this.helper.addFacetRefinement('author', 'Oleg Skiba')
      // // this.helper.addFacetRefinement('hierarchicalCategories.lvl0', 'root')
      //
      // // this.helper.toggleFacetRefinement('parent', 'root > test1').setQuery(self.searchModel).search();
      // this.helper.toggleFacetRefinement('parent', 'root > test1').search();
      // // this.helper.setQuery(self.searchModel).search();

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
