angular.module('cardKing')

////////////////// JSONish format client data object ///////////////
////////////////// DATA ///////////////
////////////////// DATA ///////////////
.factory('Data', function() {
  return {
    system: {
      device: {},
    },
    myCards: [
      { id: 1,
        cardName: 'HyundaiZERO',
        korean: '현대카드 ZERO',
        places: '스타박스 2,000원 할인'
      },
      { id: 2,
        cardName: 'HyundaiX',
        korean: '현대카드 X',
        places: '스타벅스, 커피빈, 카페베네, 할리스'
      },
      { id: 3,
        cardName: 'HyundaiX',
        korean: '현대카드 X',
        places: '스타벅스, 커피빈, 카페베네, 할리스'
      },
      { id: 4,
        cardName: 'HyundaiX',
        korean: '현대카드 X',
        places: '스타벅스, 커피빈, 카페베네, 할리스'
      },
      { id: 5,
        cardName: 'HyundaiX',
        korean: '현대카드 X',
        places: '스타벅스, 커피빈, 카페베네, 할리스'
      }
    ],
    tabs: [
      {
        title: '신용카드',
        template: 'views/partials/tabCredit.html'
      },
      {
        title: '체크카드',
        template: 'views/partials/tabCheque.html'
      },
      {
        title: '멤버쉽카드',
        template: 'views/partials/tabMember.html'
      }
    ]
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
