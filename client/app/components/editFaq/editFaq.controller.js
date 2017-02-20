import {languages} from '../../config';

class EditFaqController {
  constructor($state, CategoryService, FaqService) {
    'ngInject';
    this.name = 'editFaq';

    let self = this;
    this.$state = $state;
    this.CategoryService = CategoryService;
    this.FaqService = FaqService;

    this.faq = {};
    this.languages = languages;
    this.tinymceOptions = {
      plugins: 'link image code',
      toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code',
      themes: "modern",
      skin: false,
      height: '100%',
      menubar: 'edit insert view format table tools',
      resize: false,
      toolbar: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
      menu: {
        file: {title: 'File', items: 'newdocument'},
        edit: {title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall'},
        insert: {title: 'Insert', items: 'link media | template hr'},
        view: {title: 'View', items: 'visualaid'},
        format: {
          title: 'Format',
          items: 'bold italic underline strikethrough superscript subscript | formats | removeformat'
        },
        table: {title: 'Table', items: 'inserttable tableprops deletetable | cell row column'},
        tools: {title: 'Tools', items: 'spellchecker code'}
      }
    };

    if($state.current.name == 'createFaq'){
      this.faq = {
        question: '',
        answer: '',
        category: {},
        tags: [],
        visibility: 'Public',
        author: 'Amelia Kim',
        language: 'English',
        openForComments: true,
        published: true,
        remarks: [],
        draft: false,
      };
    }else{
      this.FaqService.getById($state.params.faqId)
        .then((result) => {
          self.faq = result;
        })
        .catch((error) => {
          console.warn('Error request:', error);
        });
    }

    // self.CategoryService.getAll()
    //   .then((result) => {
    //     self.categories=result;
    //   })
    //   .catch((error) => {
    //     console.warn('Error request:', error);
    //   });

    this.categories=[
      {
        name: 'Category1',
        node_id: 1
      },
      {
        name: 'Category2',
        node_id: 2
      },
      {
        name: 'Category3',
        node_id: 3
      }
    ];
  }

  addRemark(data) {
    this.faq.remarks.push(data)
  }

  save() {
    console.log('save', this.faq);
    let self = this;
    this.FaqService.save(this.faq)
      .then((result) => {
        self.$state.go("faq", self.$state.params);
    })
  }

  saveAsDraft() {
    console.log('saveAsDraft');
    this.faq.draft=true;
    this.save();
  }

  remove() {
    let self = this;
    this.FaqService.remove(this.faq.id)
      .then((result) => {
        self.$state.go("dashboard");
      })
  }
}

export default EditFaqController;

