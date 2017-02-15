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
            self.categories = [self.parseTreeCategory(result.categories).find(c => c.node_id == self.currentCategory)];
            self.articles = result.articles.filter(article => article.categories.find(c => c == self.currentCategory));
          })
          .catch((error) => {
            console.warn(error);
          })
    })(this);
  }

  parseTreeCategory(categories) {
    categories.forEach((category, i) => {
      categories[i].categories = categories.filter(c => c.dependencies == category.node_id);
    });
    return categories;
  }

}

export default CategoryController;
