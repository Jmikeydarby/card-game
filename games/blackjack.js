const Deck = require('../app/deck');
const inquirer = require('inquirer');

const cardValues = {
  'Ace': 11,
  'Two': 2,
  'Three': 3,
  'Four': 4,
  'Five': 5,
  'Six': 6,
  'Seven': 7,
  'Eight': 8,
  'Nine': 9,
  'Ten': 10,
  'Jack': 10,
  'Queen': 10,
  'King': 10
}

class Blackjack extends Deck {
  constructor() {
    super();
    this.dealer = {
      total: 0,
      softTotal: 0,
      hand: [],
      Aces: 0
    };
    this.player = {
      total: 0,
      hand: [],
      Aces: 0
    }
    this.addDeck(3);
    this.shuffleDeck();
    console.log('Welcome to Blackjack!');
  }

  totalReset () {
    this.dealer = {
      total: 0,
      softTotal: 0,
      hand: [],
      aces: 0
    };
    this.player = {
      total: 0,
      hand: [],
      aces: 0
    }
  }

  dealHand () {
    this.player.hand.push(this.drawCard(1));
    this.dealer.hand.push(this.drawCard(1));
    this.player.hand.push(this.drawCard(1));
    this.dealer.hand.push(this.drawCard(1));
  }
  static evaluateAces (hand) {
    return hand.reduce((a,b) => {
      if (b[0].split(' ')[0] === 'Ace'){
        return a + 1;
      }else{
        return a;
      }
    }, 0)
  }

  deal () {
    if (this.deck.length < 30) {
      this.resetDeck();
      this.addDeck(4);
      this.shuffleDeck();
    }
    this.totalReset();
    this.dealHand();
    this.dealer.aces = Blackjack.evaluateAces(this.dealer.hand);
    this.valueDealerHand();
    console.log('Dealer Cards', this.dealer.hand);
    console.log('Dealer Total',this.dealer.total);
    console.log('Dealer Soft Total',this.dealer.softTotal);
    console.log('Dealer Aces',this.dealer.aces);
  }
  static valueCard (card) {
    return cardValues[card[0].split(" ")[0]];
  }

  valueDealerHand () {
    let handvalues = this.dealer.hand.map( card => {
      return Blackjack.valueCard(card);
    });
    console.log(handvalues);
    this.dealer.total = handvalues.reduce((a, b) => {
      return a+b;
    }, 0);
    this.dealer.softTotal = this.dealer.total - handvalues[0]
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

module.exports = Blackjack;
