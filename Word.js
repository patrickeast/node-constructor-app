const Letter = require("./Letter");


class Word {
    constructor(letterArr, wordString, checkAgainst) {
        this.letterArr = [];
        const underlyingWord = new Letter();
        console.log(underlyingWord);
    }
    wordString() {
        toString: ;
        // Returns a string representing the word. Should
        // call isReturned() on each letter object that
        // displays the character or an underscore and 
        // concatenate those together
    }
    checkAgainst(letterArr) {
        // Takes underlyingWord as argument and calls guess()
        // on each letter object.
        underlyingLeter.guess(letterArr);
    }
}

module.exports = Word;