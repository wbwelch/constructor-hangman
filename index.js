var inquirer = require('inquirer');
var word = require('./Word.js');
var letter = require('./Letter.js');
var lives = 10;
var userGuess = null;
var gameWord = null;

var game = {
	//stores random words
	gameWords: ['Flower Power', 'Groovy', 'Peace Out Man', 'All You Need is Love', 'The Beatles', 'Make Love, Not War', 'Far Out', 'Peace', 'Hippie', 'Bell Bottoms', 'Don\'t Worry', 'Jimi Hendrix', 'Grateful Dead', 'Janis Joplin', 'Lava Lamp', 'Led Zeppelin', 'The Doors'],
	//selects random word and uses word constructor to store it
	wordSelect: function() {
		for (var i = 0; i < game.gameWords.length; i++) {
			gameWord = game.gameWords[Math.floor(Math.random() * game.gameWords.length)];
			word.gameWord = gameWord;
			letter.gameWord = gameWord;
			letter.Letter.newWord();
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
		]).then(function(guess){
			if(lives > 0) {
				letter.letterPerm.checkInput();
				if (letter.letterPerm.guessed === false) {
					lives--;
					console.log('You have ' + lives + ' lives remaining.');
				}
				else {
					letter.letterPerm.printLetter();
					console.log('\nYou have ' + lives + ' lives remaining.')
				};
			};
		});
	}
};
game.wordSelect();
game.promptUser();

//need to code in game reset


