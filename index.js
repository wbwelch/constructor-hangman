var inquirer = require('inquirer');

var word = require('./lib/Word.js');
var letter = require('./lib/Letter.js');
var words = require('./lib/words.js');

var lives = 10;
var userGuess = null;
var gameWord = null;

var game = {
	
	
	//selects random word and uses word constructor to store it
	wordSelect: function() {
		for (var i = 0; i < game.gameWords.length; i++) {
			gameWordTemp = game.gameWords[Math.floor(Math.random() * game.gameWords.length)];
			gameWord = gameWordTemp.toString();
			word.gameWord = gameWord;
			letter.gameWord = gameWord;
//			letter.letterPerm[i].newWord();
			//console.log(letter);
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
				for (var i = 0; i < gameWord.length; i++) {
					letter.Letter[i].checkInput();
					if (letter.letterPerm[i].guessed === false) {
						lives--;
						console.log('You have ' + lives + ' lives remaining.');
					}
					else {
						letter.letterPerm[i].printLetter();
						console.log('\nYou have ' + lives + ' lives remaining.')
					};
				};
			};
		});
	}
};
game.wordSelect();
console.log(letter);
console.log(word);
//Letter.newWord();
game.promptUser();

//need to code in game reset


