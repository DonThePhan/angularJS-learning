const app = angular.module('HelloCtrl', []);
app.controller('HelloCtrl', HelloCtrl);

function HelloCtrl() {
  this.helloMessage = "I'm from the main module"
}