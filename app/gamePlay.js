const Promise = require('bluebird');
const games = '../games';

function gamePlay (gameName) {
  switch (gameName.toLowerCase()) {
    case 'blackjack': {
      const Blackjack = require(`${games}/blackjack`);
      const Game = new Blackjack;
      return Game.play();
    }
  }


}


module.exports = gamePlay;
