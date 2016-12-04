const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'), {suffix: "Promise"});
const inquirer = require('inquirer');
const gamePlay = require('./gamePlay');

function gameSelection () {
	return fs.readdirPromise( __dirname + '/../games')
		.then(files => {
			gameNames = files.map(file => {
				return capitalize(file.split('.').slice(0, -1).join(" "));
			})

			return inquirer.prompt([{
				type: 'list',
				name: 'gameSelection',
				message: 'Which card game would you like to play?',
				choices: gameNames
			}])
		})
		.then(game => {
			return gamePlay(game.gameSelection);
		})
		.catch(err => {
			throw new Error(err);
		})
}

function capitalize (string) {
	let strArr = string.split(" ").map( word => {
		return word.slice(0, 1).toUpperCase() + word.slice(1);
	})
	return strArr.join(' ');
}

module.exports = gameSelection;
