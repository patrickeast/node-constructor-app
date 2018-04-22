class Letter {
	constructor(word, correctGuess) {
		this.gameWord = word;
		this.correctLetter = correctGuess;
		this.displayText = "";
		this.winner = false;
	}
	// Returns the underlying character if the letter has been guessed, 
	// or a placehder if the letter has not been guessed.
	parseDisplay() {
		let showCharacter = "";

		if (this.correctLetter == undefined) {
			for (let i = 0; i < this.gameWord.length; i++) {
				showCharacter += " _ ";
			}
		} else {
			for (let i = 0; i < this.gameWord.length; i++) {
				let letterFound = false;

				for (let j = 0; j < this.correctLetter.length; j++) {
					if (this.gameWord[i] == this.correctLetter[j]) {
						showCharacter += this.correctLetter[j];
						letterFound = true;
					}
				}

				if (!letterFound) {
					showCharacter += " _ ";
				}
			}
		}
		this.displayText = showCharacter.trim();
		console.log(this.displayText);

		if(this.displayText == this.gameWord) {
			this.winner = true;
		}
	}
};

module.exports = Letter;