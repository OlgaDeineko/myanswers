import config, {apiUrl} from '../config';

function FaqService($http, SessionService) {
  "ngInject";

  let getById = (faqId) => {
    // return $http({
    //   method: 'GET',
    //   url: `${SessionService.geApiUrl()}/faq/${faqId}`,
    // }).then(result => {
    //   console.log(result);
    //   return result.data.data
    // });
    return new Promise((resolve, reject) => {
      resolve({
        id: 1,
        question: 'My first FAQ page',
        answer: "<p style=\"margin: 0px 0px 15px; padding: 0px; text-align: justify; font-family: 'Open Sans', Arial, sans-serif; font-size: 14px; background-color: #ffffff;\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum faucibus augue, nec ullamcorper purus feugiat at. Phasellus dignissim, enim eu gravida pulvinar, nisi lectus maximus sapien, et condimentum risus lacus sit amet libero. Cras id rhoncus massa. Nam interdum finibus dolor, non tristique odio semper id. Aenean id sollicitudin neque. Phasellus vitae magna vitae velit suscipit condimentum sed nec est. Integer id mauris a dolor pellentesque blandit sit amet non magna.</p>\
    <p style=\"margin: 0px 0px 15px; padding: 0px; font-family: 'Open Sans', Arial, sans-serif; font-size: 14px; background-color: #ffffff; text-align: center;\">Proin euismod eros odio, in tincidunt ipsum semper sed. Proin accumsan euismod sollicitudin. Praesent fringilla nisi in mi molestie aliquet. Aenean tempor rutrum augue eget lacinia. Aliquam erat volutpat. Vestibulum pretium porttitor enim, vel mattis lorem mattis eu. Cras sed sodales nibh, non mattis urna. Pellentesque malesuada dictum urna vitae lacinia. Morbi convallis ante eu justo vestibulum tincidunt. Sed eu mi at lorem consectetur blandit quis nec elit. Mauris arcu mauris, auctor id diam ac, accumsan tempor libero. Cras egestas elementum pellentesque. Ut rutrum ac nibh ut vehicula. Cras enim tellus, vehicula sed accumsan vel, eleifend tempor mauris. Praesent euismod ante eget felis eleifend, eget efficitur ex gravida. Nam a odio id elit eleifend fermentum sollicitudin vitae purus.</p>",
        category: {
          name: "Uncategorized",
          node_id: 1,
          parent_id: 0
        },
        tags: ['tag1', 'tag2', 'tag3', 'tag4', 'tag5',],
        visibility: 'Public',
        author: 'Amelia Kim',
        language: 'English',
        openForComments: true,
        published: true,
        remarks: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet nulla tellus. Aenean ac convallis odio. Praesent sed quam dolor. Suspendisse vel facilisis lorem. Cras non aliquet mauris. Aenean et ipsum interdum, congue lectus vitae, consequat ex. Vestibulum auctor ex eros, a cursus dolor lobortis sed. Vestibulum lacinia malesuada diam, ac tristique felis lacinia ac.',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet nulla tellus. Aenean ac convallis odio. Praesent sed quam dolor. Suspendisse vel facilisis lorem. Cras non aliquet mauris. Aenean et ipsum interdum, congue lectus vitae, consequat ex. Vestibulum auctor ex eros, a cursus dolor lobortis sed. Vestibulum lacinia malesuada diam, ac tristique felis lacinia ac.',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet nulla tellus. Aenean ac convallis odio. Praesent sed quam dolor. Suspendisse vel facilisis lorem. Cras non aliquet mauris. Aenean et ipsum interdum, congue lectus vitae, consequat ex. Vestibulum auctor ex eros, a cursus dolor lobortis sed. Vestibulum lacinia malesuada diam, ac tristique felis lacinia ac.',
        ],
        draft: false
      })
    });
  };

  let save = (faq) => {
    // return $http({
    //   method: 'POST',
    //   url: `${SessionService.geApiUrl()}/faq`,
    //   data: faq
    // }).then(result => {
    //   console.log(result);
    //   return result.data.data
    // });
  };

  let remove = (faqId) => {
    // return $http({
    //   method: 'DELETE',
    //   url: `${SessionService.geApiUrl()}/faq/${faqId}`,
    // }).then(result => {
    //   console.log(result);
    //   return result.data.data
    // });
  };

  return {
    getById,
    save,
    remove
  }
}

export default FaqService;
