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
 */
/**
 * @name CategoryResponse
 * @property {number} id - category id
 * @property {string} name - article question (title)
 * @property {number} parent_id - article slug
 * @property {string} lang - code article language
 * @property {string} author - author full name
 * @property {timestamp} created_at
 * @property {timestamp} updated_at
 */
/**
 * @name CategoryRequest
 * @property {string} name - article question (title)
 * @property {number} parent_id - article slug
 * @property {string} lang - code article language
 * @property {string} author - author full name
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
    category.parent_id = +category.parent_id;

    if ($rootScope.settings) {
      category.language = $rootScope.settings.languages.find((l) => l.code == category.lang);
    }

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
    };
  };

  /**
   * build tree categories
   * @param {Article[]} articles
   * @param {Category[]} categories
   * @param {Number} currentCategory
   * @returns {Object}
   */
  let buildTree = (articles, categories, currentCategory ) => {
    articles = articles.filter((article) => article.status != 'trash');
    categories.forEach((category, i) => {
      categories[i].categories = categories.filter(c => c.parent_id == category.id);
      categories[i].articles = articles.filter(a => a.categories.find(c => c.id == category.id));
      categories[i].allArticles = articles;
      categories[i].allCategories = categories.filter(c => c.parent_id != 0);
    });

    return categories.find(c => c.id == currentCategory)
  };

  /**
   * return new object of category
   * @param {number} parentCategoryId - parent category id
   * @param {string} author - auuthor
   * @returns {object}
   */
  let newCategory = (parentCategoryId, author) => {
    return {
      name: '',
      parent_id: +parentCategoryId || 1,
      lang: 'en',
      author: author || 'Unknown',
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
