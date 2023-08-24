/** 1.2 */
myAppModule.component('postsComponent' /** camelCase */, {
  /** reference component html */
  templateUrl: 'postsComponent/posts.html',

  /** anonymous controller func (or you can make one an reference it if you want) */
  controller: function ($scope) {
    $scope.posts = ['hi', 'hello', 'yo'];
    console.log('PostsListController');
  },
});
