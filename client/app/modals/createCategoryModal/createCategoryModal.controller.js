class CreateCategoryModalController {
  constructor($scope, $filter, $stateParams, toastr,
              categoryHelper, CategoryService, UserService) {
    'ngInject';

    this.name = 'createCategoryModal';

    this.$scope = $scope;
    this.toastr = toastr;
    this.translate = $filter('translate');

    this.CategoryService = CategoryService;

    this.$uibModalInstance = $scope.$parent.$uibModalInstance;
    this.$resolve = $scope.$parent.$resolve;

    this.mode = 'create';
    this.type = $stateParams.categoryId ? 'Subcategory' : 'Category';
    this.newCategory = categoryHelper.newCategory($stateParams.categoryId, UserService.getFullName());
    this.parentCategory = this.$resolve.parentCategory || this.$resolve.category.parent;
    this.users = [];

    if (this.$resolve.category) {
      this.newCategory = this.$resolve.category;
      this.mode = 'update';
      if (this.newCategory.parent_id != 1) {
        this.type = 'Subcategory';
      }
    }

    CategoryService.getAll()
      .then((result) => {
        this.initForm(result)
      });
  }

  initForm(categories) {
    this.schema = {
      type: "object",
      properties: {
        "name": {
          type: "string",
          title: this.translate('CATEGORY.LABEL_TITLE'),
          minLength: 2,
          "x-schema-form": {
            placeholder: this.translate('CATEGORY.LABEL_TITLE')
          }
        },
        "author": {
          type: "string",
          title: this.translate('CATEGORY.AUTHOR'),
          readonly: true,
          minLength: 2,
          "x-schema-form": {
            placeholder: this.translate('CATEGORY.AUTHOR')
          }
        },
        "parent_id": {
          type: "number",
          title: this.translate('CATEGORY.PARENT_CATEGORY'),
          "x-schema-form": {
            key: 'parent_id',
            type: "select",
            titleMap: categories.filter((cat) => cat.parent_id == 1 || cat.parent_id == 0).map((item) => {
              return {value: item.id, name: item.name};
            })
          }
        },
        "lang": {
          type: "string",
          title: this.translate('CATEGORY.LANGUAGE'),
          "x-schema-form": {
            key: 'lang',
            type: "select",
            titleMap: this.$scope.$root.settings.languages.map((item) => {
              return {value: item.code, name: item.name};
            })
          }
        }
      },

      required: ["name", "author", "parent_id", "lang"]
    };
  }

  save(form, newCategory) {
    this.$scope.$broadcast('schemaFormValidate');
    if (form.$valid) {
      this.CategoryService[this.mode](newCategory)
        .then((result) => {
          this.toastr.success(this.translate(`MESSAGES.${this.type.toUpperCase()}_${this.mode.toUpperCase()}`));
          this.$uibModalInstance.close(result);
        }, (error) => {
          error.data.errors.forEach(error => {
            this.toastr.error(error.message, this.translate('MESSAGES.VALIDATION_ERROR'));
          });
        })
    }
  }

  cancel() {
    this.$uibModalInstance.dismiss();
  }
}

export default CreateCategoryModalController;
