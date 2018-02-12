var letter = require('./Letter.js');
var gameWord = null;
var userGuess = null;

function Word(word) {
	this.word = word;
};
Word.prototype = {
	wordString: function() {
		for (var i = 0; i < letter.letterArray.length; i++) {
			letter.letterPerm.printLetter();
		};	
	},
	guess: function() {
		for (var i = 0; i < this.word.length; i++) {
			letter.letterPerm.checkInput();
		};
	}
};

module.exports = gameWord;
module.exports = Word;
