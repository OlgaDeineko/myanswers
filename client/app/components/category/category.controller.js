class CategoryController {
  constructor(CategoryService) {
    "ngInject";

    this.CategoryService = CategoryService;
    this.name = 'category';
    this.list = [];

    (function getAllData(self) {
      self.CategoryService.getAll()
          .then((result) => {
            self.list = result;
          })
          .catch((error) => {
            console.warn(error);
          })
    })(this);
  }

}

export default CategoryController;
