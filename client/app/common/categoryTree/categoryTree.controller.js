class CategoryTreeController {
  constructor(CategoryService, ArticleService) {
    'ngInject';

    this.name = 'categoryTree';
    this.CategoryService = CategoryService;
    let self = this;

    this.sorting = [
      {
        name: 'CUSTOM',
        cat: '',
        faq: ''
      },
      {
        name: 'NAME_ASC',
        cat: 'name',
        faq: 'question'
      },
      {
        name: 'NAME_DESC',
        cat: '-name',
        faq: '-question'
      },
      {
        name: 'AUTHOR_ASC',
        cat: 'author',
        faq: 'author'
      },
      {
        name: 'AUTHOR_DESC',
        cat: '-author',
        faq: '-author'
      },
      {
        name: 'LAST_CREATED',
        cat: '-crated_at',
        faq: '-crated_at'
      },
      {
        name: 'LAST_UPDATED',
        cat: '-updated_at',
        faq: '-updated_at'
      },
    ];

    this.sort = {
      name: 'NAME_ASC',
      cat: 'name',
      faq: 'question'
    };

    Promise.all([
      CategoryService.getAll(),
      ArticleService.getAll()
    ]).then((result) => {
      self.allCategories = result[0].filter((category) => category.parent_id != 0);
      self.allArticles = (self.articleType == 'all')
          ? result[1].filter((a) => a.status != 'trash')
          : result[1].filter((a) => a.status == self.articleType);
    });

    this.searchModel = "";
  }

  moved(index, item) {
    let self = this;
    this.tree.categories.splice(index, 1);

    let idx = 0;

    function next() {
      if (idx < self.tree.categories.length) {
        if(self.tree.categories[idx].sort_order != idx) {
          self.tree.categories[idx].sort_order = idx;
          self.CategoryService.changeOrder(self.tree.categories[idx++]).then(next);
        }else{
          idx++;
          next();
        }
      }
    }

    next();

  }
}

export default CategoryTreeController;
