import SessionService from './session.service';
import ResponseObserver from './responseObserver.service';
import ArticleService from './article.service';
import CategoryService from './category.service';
import SubdomainService from './subdomain.service';
import SettingsService from './settings.service';
import UsersService from './users.service';
import UserService from './user.service';
import FakeDataService from './fakeData.service';
import FilesService from './files.services';
import ConfirmService from './confirm.service';
import AlgoliaService from './algolia.service';

let servicesModule = angular.module('app.services', [])
  .service('ResponseObserver', ResponseObserver)
  .service('SessionService', SessionService)
  .service('ArticleService', ArticleService)
  .service('CategoryService', CategoryService)
  .service('SubdomainService', SubdomainService)
  .service('SettingsService', SettingsService)
  .service('UsersService', UsersService)
  .service('UserService', UserService)
  .service('FakeDataService', FakeDataService)
  .service('FilesService', FilesService)
  .service('ConfirmService', ConfirmService)
  .service('AlgoliaService', AlgoliaService)

  .name;

export default servicesModule;
