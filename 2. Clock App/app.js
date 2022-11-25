const TimeCtrl = ($scope) => {
  $scope.currentTime = new Date().toTimeString();

  // 3. For ng-model Two Way Data Binding
  $scope.userName = '';

  // 2. We create a function that updates the variable. This function can be accessible in the HTML
  $scope.updateTime = () => {
    console.log('button clicked');
    $scope.currentTime = new Date().toTimeString();
  };
};

let app = angular.module('clockApp', []);
app.controller('TimeCtrl', TimeCtrl);
