angular.module('cardKing')

////////////////// JSONish format client data object ///////////////
.factory('Data', function() {
  return {
    system: {
      device: {},
    }
  };
})

/////////////////// UTILITY FUNCTIONS //////////////////////////
.factory('Utility', function (
Data, $stateParams, $state
){
  var goTo = function (state, paramsObj){
    arguments.length === 1 ? $state.go(state) : $state.go(state, paramsObj);
  };


  return {
    goTo: goTo
  }
})
