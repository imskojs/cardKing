angular.module('cardKing')
///////////////////// 01  WALKTHOUGH  //////////////////////////
///////////////////// 01  WALKTHOUGH  //////////////////////////
///////////////////// 01  WALKTHOUGH  //////////////////////////
.controller('walkThrough', function (
  $scope, Data, Utility
){
  var $ = Utility;

})
/////////////////////  02 MAIN   //////////////////////////
/////////////////////  02 MAIN   //////////////////////////
/////////////////////  02 MAIN   //////////////////////////
.controller('main', function (
  $scope, Data, Utility, $ionicSideMenuDelegate, $ionicScrollDelegate
){
  var $ = Utility;
  $scope.toggleLeft = function (){
    $ionicSideMenuDelegate.toggleLeft();
  }
})
.controller('main.home', function (
  $scope, Data, Utility
){
  var $ = Utility;

})
.controller('main.myCards', function (
  $scope, Data, Utility, $ionicScrollDelegate, $timeout, 
  $ionicModal
){
  var $ = Utility;
  $scope.myCards = Data.myCards
  $scope.tabs = Data.tabs;
  $scope.currentTab = 'views/partials/tabCredit.html'

  $scope.$on('$ionicView.leave', function (){
    $ionicScrollDelegate.$getByHandle('myCards').scrollTop();
  })

  $ionicModal.fromTemplateUrl('views/modals/myCardsModal.html', {
    scope: $scope,
    animation: 'slide-in-up',
    // Consistent non-sys-back button usage.
    hardwareBackButtonClose: false 
  }).then(function(modal){
    $scope.myCardsModal = modal;
  })

  $scope.setTab = function (tab){
    $scope.currentTab = tab.template;
  }



})





