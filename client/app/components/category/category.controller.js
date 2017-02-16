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
    this.name = 'Dashboard';
    this.uncategoryId = 1;
    this.currentCategory = $stateParams.categoryId || this.uncategoryId;

    this.categories = filterCategories(parseTreeCategory([
      {
        "node_id": "1",
        "dependencies": "0",
        "name": "Uncategorized"
      },
      {
        "node_id": "4",
        "dependencies": "1",
        "name": "IT"
      },
      {
        "node_id": "5",
        "dependencies": "2",
        "name": "Backend"
      },
      {
        "node_id": "9",
        "dependencies": "3",
        "name": "Frameworks"
      },
      {
        "node_id": "10",
        "dependencies": "3",
        "name": "CMS"
      },
      {
        "node_id": "11",
        "dependencies": "4",
        "name": "WordPress"
      },
      {
        "node_id": "12",
        "dependencies": "4",
        "name": "Drupal"
      },
      {
        "node_id": "6",
        "dependencies": "2",
        "name": "FrontEnd"
      },
      {
        "node_id": "7",
        "dependencies": "3",
        "name": "Angular"
      },
      {
        "node_id": "8",
        "dependencies": "3",
        "name": "React"
      }
    ]), this.currentCategory);
    this.articles = [];

    // (function getAllData(self) {
    //   self.CategoryService.getAll()
    //       .then((result) => {
    //         let categoriesTree = parseTreeCategory(result);
    //         self.categories = filterCategories(categoriesTree, self.currentCategory);
    //         self.articles = filterArticles(result.articles, self.currentCategory);
    //       })
    //       .catch((error) => {
    //         console.warn('Error request:', error);
    //       })
    // })(this);
  }

  getCurentCategoryName(){
    return (this.currentCategory != this.uncategoryId)
      ? this.categories.find(c => c.node_id == this.currentCategory).name
      : this.name;
  }

}

export default CategoryController;
