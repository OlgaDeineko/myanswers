let parseTreeCategory = (categories) => {
  categories.forEach((category, i) => {
    categories[i].categories = categories.filter(c => c.parent_id == category.id);
  });
  return categories;
};

let filterArticles = (articles, categoryId) => {
  return articles.filter(article => article.categories.find(c => c.id == categoryId));
};

let filterCategories = (categories, categoryId) => {
  return categories.filter(c => c.id == categoryId);
};

class CategoryController {
  constructor($stateParams, $uibModal, CategoryService, ArticleService) {
    "ngInject";

    this.name = 'Dashboard';
    this.uncategoryId = 1;
    this.$uibModal = $uibModal;

    this.ArticleService = ArticleService;
    this.CategoryService = CategoryService;
    this.currentCategory = $stateParams.categoryId || this.uncategoryId;

    this.categories = [];
    this.articles = [];

    (function getAllData(self) {
      self.CategoryService.getAll()
        .then((result) => {
          let categoriesTree = parseTreeCategory(result);
          self.categories = filterCategories(categoriesTree, self.currentCategory);
        })
        .catch((error) => {
          console.warn('Error request:', error);
        });
      self.ArticleService.getAll()
        .then(result => {
          self.articles = filterArticles(result, self.currentCategory);
        })
        .catch((error) => {
          console.warn('Error request:', error);
        })
    })(this);
  }

  getCurentCategoryName() {
    return (this.categories.length && this.currentCategory != this.uncategoryId)
      ? this.categories.find(c => c.id == this.currentCategory).name
      : this.name;
  }


  createCategory = () => {
    let modalInstance = this.$uibModal.open({
      component: 'createCategoryModal'
    });
  };

}

export default CategoryController;
