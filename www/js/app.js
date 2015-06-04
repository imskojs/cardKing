// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('cardKing', ['ionic'])

.run(function($ionicPlatform, Data, Utility, $rootScope) {
  var $ = Utility;
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      // Enable most css features.
      $ionicPlatform.setGrade('a');
      // get device info.
      Data.system.device = $ionicPlatform.device();
      $ionicPlatform.showStatusBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
  $rootScope.goTo = $.goTo;
  $rootScope.currentParam = {};
  $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams){
    $rootScope.currentParam.header = toParams.header
    console.log($rootScope.currentParam);
  })
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  // Make consistent style/behaviour, defaults mostly to more strict ios styles.
  $ionicConfigProvider.views.transition('ios');
  $ionicConfigProvider.views.maxCache(999);
  $ionicConfigProvider.views.forwardCache(true);
  $ionicConfigProvider.scrolling.jsScrolling(true);
  $ionicConfigProvider.backButton.icon('ion-ios-arrow-back');
  $ionicConfigProvider.backButton.text('');
  $ionicConfigProvider.backButton.previousTitleText(false);
  $ionicConfigProvider.form.checkbox('circle');
  $ionicConfigProvider.form.toggle('large');
  $ionicConfigProvider.tabs.style('standard');
  $ionicConfigProvider.tabs.position('bottom');
  $ionicConfigProvider.templates.maxPrefetch(999);
  $ionicConfigProvider.navBar.alignTitle('center');
  $ionicConfigProvider.navBar.positionPrimaryButtons('left');
  $ionicConfigProvider.navBar.positionSecondaryButtons('right');

  $stateProvider
  .state('walkThrough', {
    url: '/walkThrough',
    templateUrl: 'views/walk.html',
    controller: 'walkThrough'
  })
  .state('main', {
    url: '/main',
    templateUrl: 'views/main.html',
    controller: 'main'
  })
    .state('main.home', {
      url: '/home',
      params: {header: 'home'},
      views: {
        'main': {
          templateUrl: 'views/home.html',
          controller: 'main.home'
        }
      }
    })
    .state('main.myCards', {
      url: '/myCards',
      params: {header: 'myCards'},
      views: {
        'main': {
          templateUrl: 'views/myCards.html',
          controller: 'main.myCards'
        }
      }
    })

  $urlRouterProvider.otherwise('/walkThrough');

});
