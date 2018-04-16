class Letter {
    constructor(character, isGuessed, isReturned) {
        this.character = character;
        this.isGuessed = false;
    }
    isReturned() {
        if (process.argv[2] == this.character) {
            return this.character;
            console.log("CORRECT!!!");
        } else {
            console.log("INCORRECT!!!");
        }
        
        // Returns the underlying character if the letter has 
        // been guessed, or a placehder if the letter has not 
        // been guessed.
    }
    isGuessed(guess) {
        if (this.guess == this.character) {
            this.isGuessed = true;
            console.log(this.isGuessed);
        }
        // Take the character as an argument and checks it 
        // against the underlying character, updating the 
        // stored boolean value to true if it was guessed 
        // correctly.
    }
}

module.exports = Letter;