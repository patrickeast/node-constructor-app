const inquirer = require("inquirer");
const Word = require("./Word");


console.log("----------------------------------");
console.log(" ");
console.log("Welcome to Constructor Word Guess!");
console.log("");
console.log("----------------------------------");

inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    }, {
        type: "confirm",
        name: "start",
        message: "Are you ready to play?"
    }, {
        type: "input",
        name: "letterGuess",
        message: "All right. Guess a letter!"
    }
]).then(function (data, err) {
    if (err) {
        console.log(err);
    } else {
        console.log(data.letterGuess.charAt(0));
    }
})

