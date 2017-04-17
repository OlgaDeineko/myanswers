/**
 * @name Category
 * @property {number} id - category id
 * @property {string} name - article question (title)
 * @property {number} parent_id - article slug
 * @property {string} lang - code article language
 * @property {string} author - author full name
 * @property {timestamp} created_at
 * @property {timestamp} updated_at
 *
 * @property {object} language - language object
 * @property {string} language.code - language code
 * @property {string} language.name - language name
 * @property {number} sort_order - number of order category
 * @property {Article[]} articles - category articles
 * @property {Category[]} categories - child categories
 * @property {string} type - category type (root || category || subcategory)
 */
/**
 * @name CategoryResponse
 * @property {number} id - category id
 * @property {string} name - article question (title)
 * @property {number} parent_id - article slug
 * @property {string} lang - code article language
 * @property {string} author - author full name
 * @property {number} sort_order - number of order category
 * @property {timestamp} created_at
 * @property {timestamp} updated_at
 */
/**
 * @name CategoryRequest
 * @property {string} name - article question (title)
 * @property {number} parent_id - article slug
 * @property {string} lang - code article language
 * @property {string} author - author full name
 * @property {number} sort_order - number of order category
 * @property {string} author_href - user stormpath href
 */

function CategoryHelper($rootScope) {
  'ngInject';

  /**
   * Prepare category
   * @param {CategoryResponse} category
   * @returns {Category}
   */
  let responseToData = (category) => {
    category.id = +category.id;
    category.sort_order = +category.sort_order;
    category.parent_id = +category.parent_id;
    switch (category.parent_id) {
      case 0:
        category.type = 'root';
        break;
      case 1:
        category.type = 'category';
        break;
      default:
        category.type = 'subcategory';
        break;
    }

    if ($rootScope.settings) {
      category.language = $rootScope.settings.languages.find((l) => l.code == category.lang);
    }

    if (!(category.granted_access && Array.isArray(category.granted_access))) {
      category.granted_access = [];
    }

    if (!category.author) {
      category.author = 'Unknown';
    }

    category.hierarchical = {
      lvl0: null,
      lvl1: null,
      lvl2: null,
    };

    return category;
  };

  /**
   * Prepare category to request
   * @param {Category} category
   * @returns {CategoryRequest}
   */
  let dataToRequest = (category) => {
    return {
      name: category.name,
      parent_id: category.parent_id,
      lang: category.lang,
      author: category.author,
      sort_order: category.sort_order,
      author_href: '',
      granted_access: category.granted_access
    };
  };

  /**
   * build tree categories
   * @param {Article[]} articles
   * @param {Category[]} categories
   * @param {Number} currentCategory
   * @returns {Object}
   */
  let buildTree = (articles, categories, currentCategory) => {
    articles = articles.filter((article) => article.status != 'trash');
    let rootId = 1;
    let rootName = categories.find(c => c.id == rootId).name;
    categories.forEach((category, i) => {
      categories[i].categories = categories.filter(c => c.parent_id == category.id).sort((a, b) => a.sort_order - b.sort_order);
      if (category.id != rootId) {
        categories[i].parent = categories.find(c => c.id == category.parent_id);
      }
      categories[i].articles = articles.filter(a => a.categories.find(c => c.id == category.id));

      categories[i].hierarchical.lvl0 = rootName;
      switch (categories[i].type) {
        case 'category':
          categories[i].hierarchical.lvl1 = [rootName, categories[i].name].join(' > ');
          break;
        case 'subcategory':
          categories[i].hierarchical.lvl1 = [rootName, categories[i].parent.name].join(' > ');
          categories[i].hierarchical.lvl2 = [rootName, categories[i].parent.name, categories[i].name].join(' > ');
          break;
      }
    });

    return categories.find(c => c.id == currentCategory);
  };

  /**
   * return new object of category
   * @param {number} parentCategoryId - parent category id
   * @param {string} author - author
   * @returns {object}
   */
  let newCategory = (parentCategoryId, author) => {
    return {
      name: '',
      parent_id: +parentCategoryId || 1,
      lang: 'en',
      author: author || 'Unknown',
      sort_order: 0,
      granted_access: []
    };
  };

  return {
    responseToData,
    dataToRequest,
    buildTree,
    newCategory
  }
}

export default CategoryHelper;
