class CategoryTreeController {
  constructor($state, $scope) {
    "ngInject";

    this.$scope = $scope;
    this.$state = $state;
    this.name = 'categoryTree';
    this.searchModel = "";
    this.sort = {
      cat: "",
      faq: "",
      order: ""
    };
  }

  changeOrder(field)  {
    if(field == this.sort.cat){
      this.sort.order = this.sort.order == "-"? "": "-";
    }else{
      this.sort = {
        cat: field,
        faq: field == 'name'? 'question' : field,
        order: ""
      };
    }

  }
}

export default CategoryTreeController;
