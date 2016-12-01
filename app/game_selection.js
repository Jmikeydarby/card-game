const fs = require('fs');

function gameSelection () {
	return fs.readdir('../games', (err, files) => {
		if (err) {
			throw new Error(err);
		}
		console.log(files);
	})
}

module.exports = gameSelection;