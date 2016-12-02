const blackjack = require('../games/blackjack');
const path = require('path');
const Deck = require('./deck');
const inquirer = require('inquirer');
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'), {suffix: "Promise"});

let playing = true;

function newGame(playAgain) {
	if (playAgain === false){
		return Promise.resolve()
	}

	// return inquirer.prompt([{
	// 	type: "list",
	// 	name: "game_selection",
	// 	message: "Which card game would you like to play?",
	// 	choices:
	// }])

	return fs.readdirPromise( __dirname + '/../games')
		.then(files => {
			console.log(files);
			return newGame(false);
		})
		.catch(err => {
			throw new Error(err);
		})




}

newGame(playing)
.then(() =>{
	console.log('Thanks for playing!')
});
