var app = angular.module('myApp', []);

app.controller('MainController', function($scope){
  $scope.todos = [];

  $scope.addTodo = function(){
    console.log('button pressed');
    if (checkList($scope.newTodo, $scope.todos)){
      $scope.todos.push($scope.newTodo);
    }
  };
});

// checks to see if item is already on list
// function checkList(target, list){
//   for(var i=0; i<list.length; i++){
//     if (list[i] == target){
//       return false;
//     }
//   }
//   return true;
// }
