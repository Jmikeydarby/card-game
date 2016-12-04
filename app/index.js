const blackjack = require('../games/blackjack');
const path = require('path');
const Deck = require('./deck');
const Promise = require('bluebird');
const gameSelection = require('./gameSelection');
const fs = Promise.promisifyAll(require('fs'), {suffix: "Promise"});

let playing = true;

function newGame(playAgain) {
	if (playAgain === false){
		return Promise.resolve();
	}

	// return inquirer.prompt([{
	// 	type: "list",
	// 	name: "game_selection",
	// 	message: "Which card game would you like to play?",
	// 	choices:
	// }])

	return gameSelection()
		.then(() => {
			return newGame(false);
		})
		.catch(err => {
			throw new Error(err);
		})




}

newGame(playing)
.then(() =>{
	console.log('Thanks for playing!')
})
.catch( err => {
	console.error(err);
});
