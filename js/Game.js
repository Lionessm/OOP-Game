/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [];
        this.activePhrase = null;
    }

    createPhrases(phrase) {
        this.phrases.push(phrase)
    }

    getRandomPhrase( ) {
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
        let randomPhraseIndex = getRandomInt(5);
        return this.phrases[randomPhraseIndex];
    }

}

const game = new Game();
const phrase = new Phrase('Break a leg');
const phrase2 = new Phrase('Success');
const phrase3 = new Phrase('Bite your tongue');
const phrase4 = new Phrase('Drop me a line');
const phrase5 = new Phrase('Beats me');
game.createPhrases(phrase);
game.createPhrases(phrase2);
game.createPhrases(phrase3);
game.createPhrases(phrase4);
game.createPhrases(phrase5);

