
//constructor which gives each letter an identity
var Letter = function(character) {
    this.realLetter = character.toUpperCase();
    this.correctGuess = false;

// function to set incoming letter to true or false 
    this.compare = function(playerGuess){
        if(playerGuess.toUpperCase() === this.realLetter){
            this.correctGuess = true;
        }

        else{
            this.correctGuess = false;
        }
    }

    //function to show either the letter or an underscore
    this.showLetter = function() {
        if (this.correctGuess = true) {
            return this.realLetter;
        }
        else {
            console.log("_");
        }
    }
}

var test = new Letter ("y");

//sending to word
module.exports = Letter;