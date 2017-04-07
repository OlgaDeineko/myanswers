class ConfirmDirective {
  constructor(ConfirmService) {
    this.restrict = 'A';
    this.scope = {
      eventHandler: '&ngClick'
    };

    this.ConfirmService = ConfirmService;
  }

  link($scope, $element, $attr) {
    let self = this;
    $element.unbind("click");
    $element.bind("click", function(e) {
      self.ConfirmService.open($attr.confirm, $scope.eventHandler);
    });

  }
}


export default (ConfirmService) => {
  'ngInject';
  return new ConfirmDirective(ConfirmService);
}
