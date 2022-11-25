const app = angular.module('nestedApp', []);

/** 1.  Each time we make a new controller, a NEW $scope object is created. They are NOT the same */
const parallelCtrl1 = ($scope) => ($scope.testProp = 'value 1');
const parallelCtrl2 = ($scope) => ($scope.testProp = 'value 2');

app.controller('parallelCtrl1', parallelCtrl1);
app.controller('parallelCtrl2', parallelCtrl2);

/** 2.  NESTED
 *      When using 'this' we declare functions using 'function' because arrow functions don't have access to 'this'*/
function nestedCtrl1() {
  this.testProp = 'nested value 1';
}
function nestedCtrl2() {
  this.testProp = 'nested value 2';
}

app.controller('nestedCtrl1', nestedCtrl1);
app.controller('nestedCtrl2', nestedCtrl2);
