class CreateCategoryModalController {
  constructor($scope, $rootScope, $stateParams, toastr, categoryHelper, CategoryService, SessionService) {
    'ngInject';
    this.name = 'createCategoryModal';
    let self = this;

    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.toastr = toastr;
    this.CategoryService = CategoryService;
    this.$uibModalInstance = $scope.$parent.$uibModalInstance;
    this.$resolve = $scope.$parent.$resolve;

    this.mode = 'create';
    this.type = $stateParams.categoryId ? 'Subcategory' : 'Category';
    this.newCategory = categoryHelper.newCategory($stateParams.categoryId, SessionService.getFullName());

    if (this.$resolve.category) {
      this.newCategory = this.$resolve.category;
      this.mode = 'update';
      if (this.newCategory.parent_id != 1) {
        this.type = 'Subcategory';
      }
    }
    CategoryService.getAll()
      .then((result) => {
        self.form = [
          "name",
          "author",
          {
            key: 'parent_id',
            type: "select",
            title: "Parent Category",
            titleMap: result.map((item) => {
              return {value: item.id, name: item.name};
            })
          },
          {
            key: 'lang',
            type: "select",
            title: "Language",
            titleMap: $rootScope.settings.languages.map((item) => {
              return {value: item.code, name: item.name};
            })
          }
        ]
      });

    this.schema = {
      type: "object",
      properties: {
        "name": {
          type: "string",
          title: "Title",
          minLength: 2,
          "x-schema-form": {
            placeholder: "Category title"
          }
        },
        "author": {
          type: "string",
          title: "Author",
          readonly: true,
          minLength: 2,
          "x-schema-form": {
            placeholder: "Author"
          }
        },
        "parent_id": {
          type: "number",
        },
        "lang": {
          type: "string",
        }
      },
      required: ["name", "author", "parent_id", "lang"]
    };
  }

  save(form, newCategory) {
    let self = this;
    this.$scope.$broadcast('schemaFormValidate');
    if (form.$valid) {
      self.CategoryService[self.mode](newCategory)
        .then((result) => {
          if (result.status == 0) {
            result.errors.forEach(error => {
              self.toastr.error(error.description, `Validation error:`);
            });
          } else {
            self.toastr.success(`${self.type} ${self.mode}d successfully`);
            self.$uibModalInstance.close(result);
          }
        }, (error) => {
          error.data.errors.forEach(error => {
            error.data.errors.forEach(error => {
              self.toastr.error(error.description, `Validation error:`);
            });
          });
        })
    }
  }

  cancel() {
    this.$uibModalInstance.dismiss({$value: 'cancel'});
  }
}

export default CreateCategoryModalController;
