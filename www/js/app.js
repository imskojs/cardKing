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
  $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams){
    $rootScope.currentParam = toParams
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
  .state('header', {
    url: '/header',
    abstract: true,
    templateUrl: 'templates/header.html'
  })
    ////////// HEADER > TAB ////////////
    .state('header.tab', {
      url: '/tab',
      abstract: true,
      views: {
        header: {
          templateUrl: 'templates/tab.html',
          controller: 'tab'
        }
      }
    })
      .state('header.tab.main', {
        url: '/main',
        params: {'cardList': 'main'},
        views: {
          main: {
            templateUrl: 'templates/main.html'
          }
        }
      })
      .state('header.tab.addCards', {
        url: '/addCards',
        params: {'cardList': 'addCards'},
        views: {
          addCards: {
            templateUrl: 'templates/addCards.html'
          },
          'cardList@header.tab.addCards': {
            templateUrl: 'templates/cardList.html'
          }
        }
      })
      .state('header.tab.barcodes', {
        url: '/barcodes',
        views: {
          barcodes: {
            templateUrl: 'templates/barcodes.html'
          }
        }
      })
    /////////////// HEADER > ADDBARCODES /////////////////
    .state('header.addBarcodes', {
      url: '/addBarcodes',
      params: {header: 'addBarcodes'},
      views: {
        header: {
          templateUrl: 'templates/addBarcodes.html'
        }
      }
    })
    /////////////// HEADER > FIRSTCARDS /////////////////
    .state('header.firstCards', {
      url: '/firstCards',
      params: {cards: 'firstCards'},
      views: {
        header: {
          templateUrl: 'templates/firstCards.html'
        },
        'cards@header.firstCards': {
          templateUrl: 'templates/cards.html'
        }
      }
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
  $urlRouterProvider.otherwise('/header/tab/main');

});
