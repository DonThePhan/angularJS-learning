const app = angular.module('todoApp', []);

app.controller('todoCtrl', function () {
  this.edit = false;

  this.todoList = [
    'Finish Wednesday season 1',
    'Learn Angular',
    'Complete Onboarding Week 2',
    'Start to understand SunRail Code',
  ];

  this.addTodoItem = function () {
    console.log('here');
    console.log(this.todoItem);
    this.todoList.push(this.todoItem);
    this.todoItem = '';
  };

  this.deleteItem = function (index) {
    this.todoList.splice(index, 1);
  };

  this.toggleEdit = function () {
    this.edit = !this.edit;
  };
});
