class CreateCategoryModalController {
  constructor($scope, $rootScope, $filter, $stateParams, toastr,
              categoryHelper, CategoryService, SessionService, UsersService) {
    'ngInject';

    this.name = 'createCategoryModal';
    let self = this;

    this.$scope = $scope;
    this.toastr = toastr;
    this.translate = $filter('translate');

    this.CategoryService = CategoryService;

    this.$uibModalInstance = $scope.$parent.$uibModalInstance;
    this.$resolve = $scope.$parent.$resolve;

    this.mode = 'create';
    this.type = $stateParams.categoryId ? 'Subcategory' : 'Category';
    this.newCategory = categoryHelper.newCategory($stateParams.categoryId, SessionService.getFullName());
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
        self.form = [
          "name",
          "author",
        ];
        // if (self.type == 'Subcategory' && self.mode == 'create') {
        self.form.push({
          key: 'parent_id',
          type: "select",
          title: self.translate('CATEGORY.PARENT_CATEGORY'),
          titleMap: result.filter((cat) => cat.parent_id == 1 || cat.parent_id == 0).map((item) => {
            return {value: item.id, name: item.name};
          })
        });
        // }
        self.form.push({
          key: 'lang',
          type: "select",
          title: self.translate('CATEGORY.LANGUAGE'),
          titleMap: $rootScope.settings.languages.map((item) => {
            return {value: item.code, name: item.name};
          })
        });
      });

    UsersService.getAll()
      .then((result) => {
        self.users = result;
      });

    this.schema = {
      type: "object",
      properties: {
        "name": {
          type: "string",
          title: self.translate('CATEGORY.LABEL_TITLE'),
          minLength: 2,
          "x-schema-form": {
            placeholder: self.translate('CATEGORY.LABEL_TITLE')
          }
        },
        "author": {
          type: "string",
          title: self.translate('CATEGORY.AUTHOR'),
          readonly: true,
          minLength: 2,
          "x-schema-form": {
            placeholder: self.translate('CATEGORY.AUTHOR')
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
          self.toastr.success(self.translate(`MESSAGES.${self.type.toUpperCase()}_${self.mode.toUpperCase()}`));
          self.$uibModalInstance.close(result);
        }, (error) => {
          error.data.errors.forEach(error => {
            self.toastr.error(error.message, self.translate('MESSAGES.VALIDATION_ERROR'));
          });
        })
    }
  }

  cancel() {
    this.$uibModalInstance.dismiss();
  }
}

export default CreateCategoryModalController;
