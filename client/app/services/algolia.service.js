import {ALGOLIA_ID, ALGOLIA_KEY} from '../constants/algolia';

import AlgoliaSearch from 'algoliasearch'
import AlgoliaSearchHelper from 'algoliasearch-helper'

function AlgoliaService(SessionService) {
  "ngInject";
  let algoliaIndex = SessionService.getSubdomain();
  let algoliaClient = new AlgoliaSearch(ALGOLIA_ID, ALGOLIA_KEY, {protocol: 'https:'});
  /**
   * @callback algoliaListener
   * @param {object} content - @see https://github.com/algolia/algoliasearch-helper-js#results-format
   */

  /**
   * this class initialize new algolia-helper object
   * @class Algolia
   */
  class Algolia {
    /**
     * @constructor
     * @param {algoliaListener} cb
     */
    constructor(cb) {
      this._algoliaHelper = new AlgoliaSearchHelper(algoliaClient, algoliaIndex, {
        hierarchicalFacets: [{
          name: 'parent',
          attributes: [
            'hierarchicalCategories.lvl0',
            'hierarchicalCategories.lvl1',
            'hierarchicalCategories.lvl2'
          ],
          rootPath: '',
        }],
        disjunctiveFacets: ['objectID'],
      });

      this._algoliaHelper.on('result', cb)
    }

    /**
     * set specific visible articles by id
     * @param {number[]|number|string[]|string} ids
     */
    set visibleArticles(ids) {
      if (!Array.isArray(ids)) {
        if (typeof ids == 'object') return;

        ids = [ids]
      }

      this._algoliaHelper.clearRefinements('objectID');
      ids.forEach((id) => {
        this._algoliaHelper.addDisjunctiveFacetRefinement('objectID', id);
      });
    }

    /**
     * for search in category @see https://github.com/algolia/algoliasearch-helper-js#hierarchical-facets
     * @param {string} hierarchicalCategory
     */
    set hierarchicalCategory(hierarchicalCategory) {
      if (this._algoliaHelper.hasRefinements('parent')) {
        this._algoliaHelper.removeHierarchicalFacetRefinement('parent');
      }
      this._algoliaHelper.addHierarchicalFacetRefinement('parent', hierarchicalCategory);
    }

    /**
     * triggering search. result will return in callback transmitted on the constructor
     * @param query
     */
    search(query) {
      if (query) {
        this._algoliaHelper.setQuery(query)
      }
      this._algoliaHelper.search()
    }
  }

  /**
   * @param {algoliaListener} cb
   * @returns {Algolia}
   */
  let initMostViewed = (cb) => {
    return new Algolia(cb);
  };

  /**
   * @param {algoliaListener} cb
   * @returns {Algolia}
   */
  let initSearching = (cb) => {
    return new Algolia(cb);
  };

  return {
    initMostViewed,
    initSearching,
  }
}

export default AlgoliaService;
