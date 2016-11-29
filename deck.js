class Deck {
	constructor(){
		this.deck = [];
		this.topCard = 0;

		this.makeDeck();

		
	}


	shuffleDeck(){
		let currentIndex = this.deck.length, tempCard, randomCard;
		while (currentIndex !== 0){

			randomCard = Math.floor(Math.random() * currentIndex);
			currentIndex--;
			tempCard = this.deck[currentIndex];
			this.deck[currentIndex] = this.deck[randomCard];
			this.deck[randomCard] = tempCard;
		}
	}

	makeDeck() {
		let newDeck = [];
		const suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
		const cards = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King']
		for (var i = 0; i < suits.length; i++){
			for (var j = 0; j < cards.length; j++){
				newDeck.push(`${cards[j]} of ${suits[i]}`)
			}
		}

		this.deck = newDeck;
	}

	drawCard(numOfDraws) {
		this.topCard+=numOfDraws;
		return this.deck.splice(0, numOfDraws);
	}

}


module.exports = Deck;