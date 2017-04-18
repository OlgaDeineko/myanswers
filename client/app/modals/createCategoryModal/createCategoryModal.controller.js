class CreateCategoryModalController {
  constructor($scope, $rootScope, $filter, $stateParams, toastr,
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
        this.form = [
          "name",
          "author",
        ];
        this.form.push({
          key: 'parent_id',
          type: "select",
          title: this.translate('CATEGORY.PARENT_CATEGORY'),
          titleMap: result.filter((cat) => cat.parent_id == 1 || cat.parent_id == 0).map((item) => {
            return {value: item.id, name: item.name};
          })
        });
        this.form.push({
          key: 'lang',
          type: "select",
          title: this.translate('CATEGORY.LANGUAGE'),
          titleMap: $rootScope.settings.languages.map((item) => {
            return {value: item.code, name: item.name};
          })
        });
      });

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
        },
        "lang": {
          type: "string",
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
