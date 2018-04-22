class Word {
    constructor(letter, word) {

        if (word.indexOf(letter) != -1) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = Word;