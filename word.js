

//pulls constructor information from letter.js to make words appear correctly.
var Letter = require("./letter.js");

// var test = new Letter("y");
// console.log(test);

//constructor for word 
var Word = function (randomWord) {
    this.randomWord = randomWord;
    this.letters = [];
    this.blanks = [];
//function which splits the word and makes a blank for each letter
    this.riddle = function () {
        var breakupWord = randomWord.split("");

        for(i = 0; i < breakupWord.length; i++){
            this.letters.push(new Letter (breakupWord[i]));
            this.blanks.push ("_");
    }

// function which evaluates blank with the letter functions 
    this.eval = function (character) {
        for(y = 0; y < this.letters.length; y++);
        {
          if(this.blanks[y] === "_"){
              this.letters[y].compare(character);
              this.blanks[y] = showLetter();
          }
          this.blanks.join(" ");
        }
    
    }}};


 //var randomWord = new Word("pizza");
 //randomWord.riddle();
 //randomWord.unveil(randomWord);
//console.log(randomWord);

//console.log(Letter.test);

module.exports= Word