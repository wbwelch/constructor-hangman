var Letter = require('./Letter.js');

function Word(word) {
	this.word = word;
	this.letters = word.split("").map(function(char) {
    	return new Letter(char);
	});
};
Word.prototype = {
	getSolution: function() {
  		return this.letters.map(function(letter) { // iterate over each letter
    	return letter.toScreen(); // return the solution for each to form an array of solved letters
  		}).join(''); // create a string from the array of solved letters
	},
	guessLetter: function(char) {
	  // Checks to see if any of the letters in the array match the user's guess and updates `foundLetter`
	  var foundLetter = false;
	  this.letters.forEach(function(letter) {
		if (char === letter.character) {
		  foundLetter = true;
          letter.guessed = true;
		}
	  });
	  // Print the word guessed so far--because we set the method for toString,
	  //  JavaScript will automatically concatenate this even if we don't call toString
	  console.log("\n" + this.getSolution() + "\n");
	  // return whether we found a letter
	  return foundLetter;
	},
	// Returns true if all letters in the word have been guessed
	guessedCorrectly: function() {
	  // The `every` method returns true if the callback function returns true for every element in the array
	  return this.letters.every(function(letter) {
	  	return letter.guessed;
	  });
	}
};

module.exports = Word;

