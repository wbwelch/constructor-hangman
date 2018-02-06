var choices = /^[A-Za-z]+$/;	

function Letter(character) {
	//displays underlying character or placeholder depending if letter has been guessed
	//should define:
	//A string value to store the underlying character for the letter
	
	//this.character = character;
	
	//A boolean value that stores whether that letter has been guessed yet
	
	//this.guessed = false;
	
};

//A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
	
//Letter.prototype.printLetter = function () {
	//if (boonlean === true) {
		//return this.character
	//} 
	//else {
		//return '_';
	//}
//}

//A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
	
//Letter.prototype.checkInput = function (userGuess) {
	//for (var i = 0; i < gameWord.length; i++) {
		//if (userGuess.value.match(choices)) {
			//if (userGuess === i) {
				//boolean true
				//call return underlying character function
			//};
		//}
		//else {
			//console.log('Please enter a valid letter.')
		//};
	//};
//}

module.exports = Letter;