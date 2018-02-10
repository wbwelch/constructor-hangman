var choices = /^[A-Za-z]+$/;
var gameWord = null;
var userGuess = null;
var letterArray = [];

function Letter(character) {
	
	this.character = character;
	this.guessed = false;
	
};

Letter.prototype = {
	newWord: function() {
		letterArray = [];
		for (var i = 0; i < gameWord.length; i++) {
			var charTemp = gameWord.charAt(i);
			var letterPerm = new Letter(charTemp);
			letterArray.push(letterPerm);
		};
	},
	printLetter: function () {
		if (this.guessed === true) {
			for (var i = 0; i < gameWord.length; i++) {
				return Letter.character;
			};
		} 
		else {
			return '_';
		};
	},
	
	checkInput: function() {
		for (var i = 0; i < gameWord.length; i++) {
				if (userGuess !== choices) {
					console.log("Please enter a valid letter.")	 
					}
				else if (userGuess === gameWord[i]) {
					this.guessed = true;
				};
			};
	}
};

module.exports = Letter;