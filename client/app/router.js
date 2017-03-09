import angular from 'angular';
import uiRouter from 'angular-ui-router';

let routerModule = angular.module('routing', [
  uiRouter
])
  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $stateProvider

      .state('chooseSubdomain', {
        url: '/subdomain',
        component: 'chooseSubdomain',
        template: '<choose-subdomain/>',
        data: {
          permissions: {
            only: ['anonymous', 'any'],
            redirectTo: 'category'
          }
        }
      })

      .state('chooseSubdomainSuperAdmin', {
        url: '/superadmin/chooseSubdomain?t&r&d&n',
        controller: ($state, SessionService) => {
          'ngInject'
          SessionService.create($state.params.t, $state.params.d, $state.params.r, $state.params.n);
          $state.go('admin.category');
        },
        // data: {
        //   permissions: {
        //     only: 'superAdmin',
        //     redirectTo: 'chooseSubdomain'
        //   }
        // }
      })

      .state('login', {
        url: '/login',
        component: 'login',
        template: '<login/>',
        // data: {
        //   permissions: {
        //     only: 'anonymous',
        //     redirectTo: 'category'
        //   }
        // }
      })

      .state('registration', {
        url: '/registration',
        template: '<registration/>',
        component: 'registration',
        data: {
          permissions: {
            only: 'any',
            redirectTo: 'category'
          }
        }
      })

      .state('activation', {
        url: '/activate?token',
        component: 'activationUser',
        template: '<activation-user/>',
        data: {
          permissions: {
            only: 'anonymous',
            redirectTo: 'chooseSubdomain'
          }
        }
      })

      .state('resetPassword', {
        url: '/requestPasswordReset?resetToken',
        component: 'forgotPassword',
        template: '<forgot-password/>',
        data: {
          permissions: {
            only: 'anonymous',
            redirectTo: 'chooseSubdomain'
          }
        }
      })

      .state('admin', {
        url: '/admin',
        abstract: true,
        template: '<ui-view/>',
        resolve: {
          settings: (SettingsService) => {
            return SettingsService.getSettings();
          }
        }
      })

      .state('admin.category', {
        url: '/category/{categoryId}',
        template: '<category/>',
        component: 'category',
        data: {
          permissions: {
            only: ['user', 'admin', 'superAdmin'],
            redirectTo: 'chooseSubdomain'
          }
        }
      })

      .state('admin.editFaq', {
        url: '/faq/edit/{faqId}',
        template: '<edit-faq/>',
        component: 'editFaq',
        data: {
          permissions: {
            only: ['user', 'admin', 'superAdmin'],
            redirectTo: 'chooseSubdomain'
          }
        }
      })

      .state('admin.createFaq', {
        url: '/faq/create?categoryId',
        template: '<edit-faq/>',
        component: 'editFaq',
        data: {
          permissions: {
            only: ['user', 'admin', 'superAdmin'],
            redirectTo: 'chooseSubdomain'
          }
        }
      })

      .state('admin.faq', {
        url: '/faq/{faqId}',
        template: '<faq/>',
        component: 'faq',
        data: {
          permissions: {
            only: ['user', 'admin', 'superAdmin'],
            redirectTo: 'chooseSubdomain'
          }
        }
      })

      .state('admin.faqCategories', {
        url: '/faq-statuses/{status}',
        template: '<faq-categories/>',
        component: 'faq-categories',
        data: {
          permissions: {
            only: ['user', 'admin', 'superAdmin'],
            redirectTo: 'chooseSubdomain'
          }
        }
      })

      .state('admin.users', {
        url: '/users',
        template: '<users/>',
        component: 'users',
        data: {
          permissions: {
            only: ['user', 'admin', 'superAdmin'],
            redirectTo: 'category'
          }
        }
      })

      .state('visitor', {
        url: '/home/:categoryId',
        template: '<visitor/>',
        component: 'visitor',
        data: {
          permissions: {
            only: ['visitor', 'user', 'admin', 'superAdmin'],
            redirectTo: 'chooseSubdomain'
          }
        }
      })

      .state('visitorArticle', {
        url: '/home/faq/:categoryId/:faqId',
        template: '<visitor-article/>',
        component: 'visitorArticle',
        data: {
          permissions: {
            only: ['visitor', 'user', 'admin', 'superAdmin'],
            redirectTo: 'chooseSubdomain'
          }
        }
      })

      .state('visitorArticleAlgolia', {
        url: '/home/faq/:faqId',
        template: '<visitor-article/>',
        component: 'visitorArticle',
        data: {
          permissions: {
            only: ['visitor', 'user', 'admin', 'superAdmin'],
            redirectTo: 'chooseSubdomain'
          }
        }
      });

    $urlRouterProvider.otherwise('/subdomain');
  })
  .name;

export default routerModule;