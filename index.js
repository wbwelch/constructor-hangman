var inquirer = require('inquirer');
var word = require('Word.js');


var game = {
	//stores random words
	gameWords: ['Flower Power', 'Groovy', 'Peace Out Man', 'All You Need is Love', 'The Beatles', 'Make Love, Not War', 'Far Out', 'Peace', 'Hippie', 'Bell Bottoms', 'Don\'t Worry', 'Jimi Hendrix', 'Grateful Dead', 'Janis Joplin', 'Lava Lamp', 'Led Zeppelin', 'The Doors'],
	//selects random word and uses word constructor to store it
	wordSelect: function() {
		for (var i = 0; i < game.gameWords.length; i++) {
			var gameWord = game.gameWords[math.Floor(math.Random() * game.gameWords.length)];
			word.gameWord = gameWord;
		};
	},
	//promtps the user for each guess
	promptUser: function() {
		inquirer.prompt([
			{
				type: 'input',
      			name: 'userGuess',
      			message: 'Guess a letter.'		
		  	}
		])
	}
}

//keeps track of user remaining guesses

	//will need to push word to Word array 
