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
    startGame() {
        const overlayScreen = document.getElementById("overlay");
        overlayScreen.style.display = "none";
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }
    checkForWin() {
        let unmatchedLetters = document.getElementsByClassName("hide letter");
        if (unmatchedLetters.length === 0){
            return true;
        } else {
            return false;
        }
    }

    removeLife() {
        let allLives = document.querySelectorAll('li.tries img');
        allLives[this.missed].src = 'images/lostHeart.png';

        if (this.missed === 4) {
            this.gameOver();
        }
        this.missed += 1;
        console.log('removed')
    }

    gameOver(gameWon) {
        const overlayScreen = document.getElementById("overlay");
        overlayScreen.style.display = 'block';
        const gameOverElementH1 = document.getElementById('game-over-message');

        if (gameWon === true){
            gameOverElementH1.textContent = "Congrats! You've won!";
            overlayScreen.classList.replace('start', 'win');
        } else {
            gameOverElementH1.textContent = "Oops, you lost. Better luck next time!";
            overlayScreen.classList.replace('start', 'lose');
        }
    }

    handleInteraction(button) {
        button.disabled = true;
        if (phrase.checkLetter(button.textContent) !== true){
            button.className = 'wrong';
            game.removeLife();
        }
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

