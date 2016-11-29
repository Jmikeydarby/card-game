const expect = require('chai').expect;
const assert = require('chai').assert;
const Deck = require('../deck');

describe('Deck', () => {
	let newDeck;
	beforeEach(function() {
		newDeck = new Deck();

	});

	it('makes a new deck of 52 cards', () => {
		assert.isArray(newDeck.deck);
		expect(newDeck.deck).to.have.lengthOf(52);
	});

	it('has a shuffleDeck function that shuffles the deck', () => {
		assert.isFunction(newDeck.shuffleDeck);
		let newerDeck = new Deck();
		newDeck.shuffleDeck();
		expect(newDeck.deck).to.have.lengthOf(52);
		assert.sameMembers(newDeck.deck, newerDeck.deck);
		expect(newDeck.deck).to.not.eql(newerDeck.deck);
	});

	it('draws cards from the top of the deck and removes them from the deck', () =>{
		let drawnCards = newDeck.drawCard(3);
		expect(newDeck.deck).to.have.lengthOf(49);
		expect(newDeck.topCard).to.eql(3);
		expect(drawnCards).to.eql(['Ace of Hearts', 'Two of Hearts', 'Three of Hearts']);
		assert.equal(newDeck.deck[0], 'Four of Hearts');
		
	})


})