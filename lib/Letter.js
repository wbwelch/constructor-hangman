//letter constructor function
function Letter(character) {
	//character
	this.character = character;
	//guessed boolean
	this.guessed = false;
	
};

//returns character or '_' based on boolean
Letter.prototype.toScreen = function(char) {
		switch (this.guessed) {
			case false:
				return "_";
				break;
			case true:
				return this.character;
				break;
	};
};

//updates boolean based on user entry accuracy
Letter.prototype.compUserEntry = function(char) {
	if (char.userGuess.toLowerCase() === this.character.toLowerCase()) {
		this.guessed = true;
		return true;
	};
    //updates boolean to true if character is a space or comma
    if (this.character === "," || this.character === " ") {
        this.guessed = true;
		return true;
	};
	return false;
};

//export constructor Letter
module.exports = Letter;
