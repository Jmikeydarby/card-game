const Games = require('../games');
const Deck = require('./deck');
const inquirer = require('inquirer');

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

	fs.readdir('../games', (err, files) => {
		if (err) {
			throw new Error(err);
		}
		console.log(files);
		newGame(false);
	})




}

newGame(playing)
.then(function(){
	console.log('Thanks for playing!');
})