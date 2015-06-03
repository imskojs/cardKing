angular.module('cardKing')
.controller('tab', function (
  $scope, Data, Utility, $rootScope
){
  var $ = Utility;
  $scope.test = function (){
    console.log($rootScope.currentParam.tab)
  }
})
