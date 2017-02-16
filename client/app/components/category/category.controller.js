let parseTreeCategory = (categories) => {
  categories.forEach((category, i) => {
    categories[i].categories = categories.filter(c => c.dependencies == category.node_id);
  });
  return categories;
}

let filterArticles = (articles, categoryId) => {
  return articles.filter(article => article.categories.find(c => c == categoryId));
}

let filterCategories = (categories, categoryId) => {
  return categories.filter(c => c.node_id == categoryId);
}

class CategoryController {
  constructor($stateParams, CategoryService) {
    "ngInject";

    this.CategoryService = CategoryService;
    this.name = 'category';
    this.currentCategory = $stateParams.categoryId || 1;

    this.categories = [];
    this.articles = [];

    (function getAllData(self) {
      self.CategoryService.getAll()
          .then((result) => {
            let categoriesTree = parseTreeCategory(result);
            self.categories = filterCategories(categoriesTree, self.currentCategory);
            self.articles = filterArticles(result.articles, self.currentCategory);
          })
          .catch((error) => {
            console.warn(error);
          })
    })(this);
  }

}

export default CategoryController;
