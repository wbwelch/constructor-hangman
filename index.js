//require npm
const inquirer = require('inquirer');

//require files
const Word = require('./lib/Word.js');
const Letter = require('./lib/Letter.js');
const words = require('./lib/words.js');

//global variables
var lives = 10;
var gameWord = null;
var choices = /^[A-Za-z]+$/;
var trueCount = 0;
var testEntry = [];

//game constructor function
function Game() {
    
	//this variable for inquirer
	this.gameObj = this;
	
	//selects random word and uses word constructor to store it
	this.wordSelect = function() {
		gameWord = words.words[Math.floor(Math.random() * words.words.length)];
		this.currentWord = new Word(gameWord);
        console.log(gameWord);
	};
    
	//promtps the user for each guess
	this.promptUser = function() {
        
        //user prompt
		inquirer.prompt([
			{
				type: 'input',
      			name: 'userGuess',
      			message: 'Guess a letter.'		
		  	}
		]).then(function(guess){
            
            //letters variable
            var lettersHolder = game.gameObj.currentWord.letters;
            
            //iterates through gameword, compares entry, print to screen
            for (var i = 0; i < gameWord.length; i++) {
                i = i;
                lettersHolder[i].compUserEntry(guess);
                console.log(lettersHolder[i].toScreen());
            };
            
            //iterates through gameword
            for (var i = 0; i < gameWord.length; i++) {
                
                //switch
                switch(lettersHolder[i].guessed) {
                        
                    //if false, continue to prompt user
                    case false:
                        i = gameWord.length + 1;
                        game.promptUser();
                        break;
                };
                
                //iterates through gameword, finds total number of correctly guessed letters
                for (var j = 0; j < gameWord.length; j++) {
                    if(lettersHolder[j].guessed) {
                        trueCount =  0;
                        for (var p = 0; p < gameWord.length; p++) {
                            if(lettersHolder[p].guessed) {
                            trueCount += 1;
                            };
                        };
                    };
                };
            };
            
            //if number of correctly guessed letters is the same as the length of the word, user won
            if (gameWord.length === trueCount) {
                //call youWon function
                youWon();
            };
	   });
    };
};


//define a new game
var game = new Game();

//call word select and prompt the user
game.wordSelect();
game.promptUser();

//function to check lives left
//var checkLives = function () {
//    if (lives > 0) {
//       game.promptUser();
//    } else {
//        console.log("Game over.");
//        game = new Game();
//        game.wordSelect();
//        game.promptUser();
//    };
//};

//function to inform the user they won and start a new game
function youWon() {
    console.log("You Won! GROOVY BABY.")
    game = new Game();
    game.wordSelect();
    game.promptUser();
};


//need to code in how to take lives count down
//lives--;
//console.log("You have " + lives + " lives remaining.")

//test code for conditional to take lives count down if user entry not in word
              
//for (var i = 0; i < gameWord.length; i++) {
//    if (guess.userGuess === lettersHolder[i].character.toLowerCase()) {
//        testEntry.push = true;
//        if (testEntry === true) {
//            i = gameWord.length + 1;
//            console.log("true");
//        } 
//    };
//};

//need to get word printing to one line
