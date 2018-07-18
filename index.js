//npm packages
var fs = require("fs");
var inquirer = require("inquirer");
var Word = require("./word.js");



//variables
var instructions = 
"\n" + "we were tryin' to have a bar-b-que" + 
"\n" + " but we forgot almost everything and didnt have one," + 
"\n" + "can you guess a few of the things we need to bring" + 
"\n" + "next time if we actually want to have a bar-b-que";

var count = 0;
var wordArray = ["chairs","spatula","sauce","beer","lighter","charcoal","burgers"];
var theWord = ""

var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];

console.log(randomWord);

var theWord = new Word (randomWord);
theWord.riddle();
theWord.eval(randomWord);
console.log(theWord);
intro();
// inquirer prompt wrapped in a function-- 
//recursion somewhere eventually guess
function intro(){
    inquirer.prompt([
    
         {
             type: "confirm",
             name: "briefing",
             message: instructions
           },
    
        {
            type: "input",
            name: "playerGuess",
            message: "Guess a letter"
          }
    
    ]).then(function(response) {
        //var storing players guessed letter
       var player = response.playerGuess;
       console.log(theWord.blanks.join(" "));
            theWord.riddle();
            // compare();
            // showLetter();
            theWord.eval(player);
    
    })
    };


