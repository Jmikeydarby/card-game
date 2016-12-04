const Deck = require('../app/deck');

class blackjack extends Deck {
  constructor() {
    super();
    this.addDeck(3);
    this.shuffleDeck();
    this.play();
  }

  play () {
    console.log(this.deck);
  }
}

module.exports = blackjack;
