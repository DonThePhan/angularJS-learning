function MoreDirectivesCtrl() {
  this.myList = [
    { name: 'Donny', age: 36 },
    { name: 'Kendra', age: '??' },
    { name: 'Shravan', age: 40 },
  ];
}

angular
  .module('moreDirectivesApp', [])
  .controller('MoreDirectivesCtrl', MoreDirectivesCtrl);
