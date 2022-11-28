/**
 *  1. Sub module - no dif from how we've been defining app.js
 */

const app2 = angular.module('myHelloModule', []);
app2.controller('HelloCtrl', HelloCtrl);

function HelloCtrl() {
  this.helloMessage = "I'm from the myHelloModule"
}