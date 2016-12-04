const Deck = require('../app/deck');
const inquirer = require('inquirer');

class blackjack extends Deck {
  constructor() {
    super();
    this.addDeck(3);
    this.shuffleDeck();
    console.log('Welcome to Blackjack!');
  }

  deal () {
    if (this.deck.length < 30) {
      this.resetDeck();
      this.addDeck(4);
    }
    this.shuffleDeck();
    console.log('This is a deal');
  }

  play () {
    this.deal();
    return inquirer.prompt([{
      type: 'list',
      name: 'playAgain',
      message: 'Do you want to play another hand?',
      choices: ['yes', 'no']
    }])
    .then( choice => {
      return choice.playAgain === 'yes' ? this.play() : Promise.resolve();
    })
    .catch( err => {
      throw new Error(err);
    })
  }
}

module.exports = blackjack;
