import {languages} from '../../config';

class CreateCategoryModalController {
  constructor($scope, $stateParams, CategoryService) {
    'ngInject';
    this.name = 'createCategoryModal';
    let self = this;

    this.$scope = $scope;
    this.CategoryService = CategoryService;
    this.$uibModalInstance = $scope.$parent.$uibModalInstance;
    this.$resolve = $scope.$parent.$resolve;

    this.mode = 'create';
    this.type = $stateParams.categoryId ? 'Subcategory' : 'Category';
    this.newCategory = {parent_id: $stateParams.categoryId || '1'};
    this.alerts = [];

    if (this.$resolve.category) {
      this.newCategory = this.$resolve.category;
      this.mode = 'update';
      if (this.newCategory.parent_id != 1) {
        this.type = 'Subcategory';
      }
    }

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
        "parent_id": {
          type: "string",
        },
        "lang": {
          type: "string",
        }
      },
      required: ["title", "parent_id", "lang"]
    };

    this.CategoryService.getAll()
      .then((result) => {
        self.form = [
          "name",
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
            titleMap: languages.map((item) => {
              return {value: item, name: item};
            })
          }
        ]
      })
      .catch((error) => {
        console.warn('Error request:', error);
      });
  }

  save(form, newCategory) {
    let self = this;
    this.$scope.$broadcast('schemaFormValidate');
    if (form.$valid) {
      self.CategoryService[self.mode](newCategory)
        .then((result) => {
          if (result.status == 0) {
            result.errors.forEach(error => {
              self.alerts.push({
                type: 'danger',
                msg: error.description
              })
            });
          } else {
            self.$uibModalInstance.close(result);
          }
        }, (error) => {
          error.data.errors.forEach(error => {
            self.alerts.push({
              type: 'danger',
              msg: error.description
            })
          });
        })
    }
  }

  cancel() {
    this.$uibModalInstance.dismiss({$value: 'cancel'});
  }

  closeAlert(index) {
    this.alerts.splice(index, 1);
  }
}

export default CreateCategoryModalController;
