class Deck {
	constructor(){
		this.deck = [];

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

		newDeck.forEach(card =>{
			this.deck.push(card)
		})
		// this.deck.push(newDeck);
	}

	drawCard(numOfDraws) {
		return this.deck.splice(0, numOfDraws);
	}

	addDeck(numOfDecks) {
		for(var i = 0; i < numOfDecks; i++){
			this.makeDeck();
		}
	}



}


module.exports = Deck;