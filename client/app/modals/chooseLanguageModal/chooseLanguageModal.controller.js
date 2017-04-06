class ChooseLanguageModalController {
  constructor($scope, $filter, toastr, SettingsService) {
    'ngInject'
    this.name = 'LANGUAGES.CHOOSE_LANGUAGE';

    this.SettingsService = SettingsService;
    this.toastr = toastr;
    this.translate = $filter('translate');

    this.languages = $scope.$root.settings.languages.filter((lang) => lang.code == 'en' || lang.code == 'nl');
    this.languageModel = SettingsService.getCurrentLanguage();

    this.$uibModalInstance = $scope.$parent.$uibModalInstance;
  }

  cancel() {
    this.$uibModalInstance.dismiss();
  }

  save() {
    this.toastr.success(this.translate('MESSAGES.LANGUAGE_CHANGED'));
    this.SettingsService.changeLanguage(this.languageModel);
    this.$uibModalInstance.close();
  }
}

export default ChooseLanguageModalController;
