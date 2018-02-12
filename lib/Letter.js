//global variables
var choices = /^[A-Za-z]+$/;
var letterArray = [];

//letter constructor function
function Letter(character) {
	//character
	this.character = character;
	//guessed boolean
	this.guessed = false;
	
};
//returns character or '_' based on boolean
Letter.prototype.toScreen(char) {
	this.letterRender = function(){
		switch (this.guessed) {
			case false:
				return "_";
				break;
			case true:
				return this.character;
				break;
		};
	};
};
//updates boolean based on user entry accuracy
Letter.prototype.compUserEntry(char) {
	if (char.toLowerCase() === this.character.toLowerCase) {
		this.guessed = true;
		return true;
	};
	return false;
};


//export constructor Letter
module.exports = Letter;