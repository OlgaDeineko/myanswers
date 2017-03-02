import angular from 'angular';
import uiRouter from 'angular-ui-router';
import forgotPasswordComponent from './forgotPassword.component';

let forgotPasswordModule = angular.module('forgotPassword', [
  uiRouter
])

.component('forgotPassword', forgotPasswordComponent)

  .config(($stateProvider) => {
    "ngInject";

    $stateProvider
      .state({
        name: 'resetPassword',
        url: '/requestPasswordReset?resetToken',
        component: 'forgotPassword',
        template: '<forgot-password/>',
        data: {
          permissions: {
            only: 'anonymous',
            redirectTo: 'chooseSubdomain'
          }
        }
      });
  })

.name;

export default forgotPasswordModule;
