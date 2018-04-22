const inquirer = require("inquirer");
const possibleWords = require("./index");
const Letter = require("./Letter");
const Word = require("./Word");


let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let lettersGuessed = [];
let letterGuessedCorrectly = [];
let displayGame;
let inputLetter;


let game = {
    wordBank: possibleWords,
    guessesRemaining: 10,
    currentWord: null,

    startGame: function () {
        this.guessesRemaining = 10;

        let j = Math.floor(Math.random() * this.wordBank.length);
        currentWord = this.wordBank[j];
        console.log("");
        console.log("----------------------------------");
        console.log(" ");
        console.log("Welcome to Pop Punk 101!");
        console.log("");
        console.log("----------------------------------");
        console.log("");

        inquirer.prompt([
            {
                name: "gameConfirm",
                type: "confirm",
                message: "Yo punk rocker, wanna play a game?'"
            }
        ]).then(function (data) {
            if (data.gameConfirm === true) {
                console.log("Then lace up your Chucks, grease that mohawk, and get ready!");
                displayGame = new Letter(currentWord);
                console.log("");
                displayGame.parseDisplay();
                console.log("");
                console.log("Guesses left: " + game.guessesRemaining);
                promptUser();
            } else {
                return;
            };
        })
    }
};

function promptUser() {
    console.log("");

    if (game.guessesRemaining > 0) {
        inquirer.prompt([
            {
                type: "input",
                name: "letter",
                message: "Well, guess a letter already!"
            }
        ]).then(function (userInput) {

            let inputLetter = userInput.letter.toLowerCase();

            console.log(inputLetter);

            if (alphabet.indexOf(inputLetter) == -1) {
                game.guessesRemaining--;
                console.log("Hot topic is not punk rock! '" + inputLetter + "' is incorrect. Try again.");

                console.log("Guesses left: " + game.guessesRemaining);

                console.log("Letters already guessed: " + lettersGuessed);
                promptUser();
            } else if (alphabet.indexOf(inputLetter) != -1 && lettersGuessed.indexOf(inputLetter) != -1) {
                console.log("We get it. You really like the letter '" + inputLetter + "', but you've already guessed it. Try again, poser.");

                console.log("Guesses left: " + game.guessesRemaining);

                console.log("Letters already guessed: " + lettersGuessed);
                promptUser();
            } else {
                console.log(inputLetter);
                console.log(game.currentWord);
                lettersGuessed.push(inputLetter);

                let letterInWord = new Word(inputLetter, game.currentWord);

                if (letterInWord) {
                    letterGuessedCorrectly.push(inputLetter);

                    displayGame = new Letter(game.currentWord, letterGuessedCorrectly);

                    displayGame.parseDisplay();

                    if (displayGame.winner) {
                        console.log("You so totally rock, dude!");

                        console.log("You only semi-conform to society. Go get yourself a new bottle of hair gel on us!");

                        return;
                    } else {
                        console.log("Guesses left: " + game.guessesRemaining);

                        console.log("Letters already guessed: " + lettersGuessed);

                        promptUser();
                    }
                } else {
                    game.guessesRemaining--;

                    displayGame.parseDisplay();

                    console.log("Guesses left: " + game.guessesRemaining);

                    console.log("Letters already guessed: " + lettersGuessed);

                    promptUser();
                }
            }
        });
    } else {
        console.log("You're so not punk rock. You don't deserve those Chucks.");
        console.log("The word was '" + game.currentWord + ".'");

    }
}

game.startGame();


