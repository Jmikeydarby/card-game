const Promise = require('bluebird');
const games = '../games';

function gamePlay (gameName) {
  switch (gameName.toLowerCase()) {
    case 'blackjack': {
      const blackjack = require(`${games}/blackjack`);
      return blackjack;
    }
  }


}


module.exports = gamePlay;
