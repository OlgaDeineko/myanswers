import FaqHelper from './faq';
import UserHelper from './user';
import CategoryHelper from './category';
import FileHelper from './file';

let helpersModule = angular.module('app.helpers', [])
  .service('faqHelper', FaqHelper)
  .service('userHelper', UserHelper)
  .service('categoryHelper', CategoryHelper)
  .service('fileHelper', FileHelper)

  .name;

export default helpersModule;
