const app = angular.module('modulesApp', [
  'myHelloModule',
  /** 2 */ 'ngTagsInput',
]);


/** 3. We also added a 'tags' variable into the Parent module. This can be used in the sub modules */
app.controller('TagsDemoCtrl', function () {
  this.tags = [{ text: 'Test1' }, { text: 'Test2' }, { text: 'Test3' }];
});
