const Promise = require('bluebird');
const games = '../games';

function gamePlay (gameName) {
  switch (gameName.toLowerCase()) {
    case 'blackjack': {
      const blackjack = require(`${games}/blackjack`);
      const game = new blackjack;
      return game.play();
    }
  }


}


module.exports = gamePlay;
