// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('header', {
    url: '/header',
    abstract: true,
    templateUrl: 'header.html'
  })
    .state('header.tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "tab.html"
    })
      .state('header.tab.main', {
        url: '/main',
        // abstract: true,
        templateUrl: "main.html"
      })
  //       .state('header.tab.main.cardList', {
  //         url: '/cardList',
  //         templateUrl: 'cardList.html'
  //       })
  //     .state('header.tab.addCards', {
  //       url: '/myCards',
  //       abstract: true,
  //       templateUrl: 'myCards.html'
  //     })
  //       .state('header.tab.addCards.cardList', {
  //         url: '/cardList',
  //         templateUrl: 'cardList.html'
  //       })
  //     .state('header.tab.barcode', {
  //       url: '/barcode',
  //       templateUrl: 'barcode.html'
  //     })
  //   .state('header.register', {
  //     url: '/register',
  //     templateUrl: 'register.html'
  //   })
  //   .state('header.headerFoot', {
  //     url: '/headerFoot',
  //     abstract: true,
  //     tempalteUrl: 'headerFoot.html'
  //   })
  //     .state('header.headerFoot.cards', {
  //       url: '/cards',
  //       templateUrl: 'cards.html'
  //     })
  // .state('foot', {
  //   url: '/foot',
  //   abstract: true,
  //   templateUrl: 'foot.html'
  // })
  //   .state('foot.cards', {
  //     url: '/cards',
  //     templateUrl: 'cards.html'
  //   })
  // .state('external', {
  //   url: '/external',
  //   templateUrl: 'external.html'
  // })
  // .state('login', {
  //   url: '/login',
  //   templateUrl: 'login.html'
  // })
  // .state('walk', {
  //   url: '/walk',
  //   templateUrl: 'walk.html'
  // })
  $urlRouterProvider.otherwise('/header');

});
