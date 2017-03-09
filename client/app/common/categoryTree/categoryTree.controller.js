class CategoryTreeController {
  constructor($rootScope) {
    'ngInject';

    this.name = 'categoryTree';

    this.sorting = [
      {
        name: 'Name[A-Z]',
        cat: 'name',
        faq: 'question'
      },
      {
        name: 'Name[Z-a]',
        cat: '-name',
        faq: '-question'
      },
      {
        name: 'Author[A-Z]',
        cat: 'author',
        faq: 'author'
      },
      {
        name: 'Author[Z-a]',
        cat: '-author',
        faq: '-author'
      },
      {
        name: 'Last Created',
        cat: '-crated_at',
        faq: '-crated_at'
      },
      {
        name: 'Last Updated',
        cat: '-updated_at',
        faq: '-updated_at'
      },
    ];
    this.languages = $rootScope.settings.languages;

    this.language = {"code": "en", "name": "English"};
    this.sort = {
      name: 'Name[A-Z]',
      cat: 'name',
      faq: 'question'
    };


    this.searchModel = "";
  }

  changeOrder(item){
    this.sort = item;
}
}

export default CategoryTreeController;
