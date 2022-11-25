const ExamplesCtrl = ($scope) => {
  $scope.textBoxChange = () => {
    console.log('text box changed');
  };
};

let app = angular.module('ngModelExamples', []);
app.controller('ExamplesCtrl', ExamplesCtrl);
