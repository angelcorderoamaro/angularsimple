var app = angular.module('ang', []);
app.controller('MainCtrl', function($scope,mainservice) {
  $scope.inithola = function(){
    $scope.lista();
  }
  $scope.abc = function(item) {
    $scope.arary= [];
    $scope.mostrar_obj = item;
    mainservice.abc(item);
    $scope.arary.push(item);
  }
  $scope.lista = function(){
    var arr = ['hola1','hola2','hola3']
    $scope.array_hola = arr;
  }
  console.log("mc");
  $scope.mv1 = function(){
      $scope.array_hola.push($scope.array_hola[0]);
     $scope.array_hola.splice($scope.array_hola[2],1)
  }
});
app.service('mainservice', function () {
    return {
        abc: function(a) {
        }
    };
});
