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
        this.gameReset();
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
    }

    gameOver(gameWon) {
        const overlayScreen = document.getElementById("overlay");
        overlayScreen.style.display = 'block';
        const gameOverElementH1 = document.getElementById('game-over-message');

        if (gameWon === true){
            gameOverElementH1.textContent = "Congrats! You've won!";
            overlayScreen.className ='win';
        } else {
            gameOverElementH1.textContent = "Oops, you lost. Better luck next time!";
            overlayScreen.className = 'lose';
        }
    }

    handleInteraction(button) {
        button.disabled = true;
        if (this.activePhrase.checkLetter(button.textContent) === false){
            button.className = 'wrong';
            game.removeLife();
        } else {
            button.className = 'chosen';
            this.activePhrase.showMatchedLetter(button.textContent);
            this.checkForWin();
            if (this.checkForWin() === true) {
                return this.gameOver(true);
            }
        }
    }

    gameReset() {
        const phraseDiv = document.getElementById("phrase");
        const phraseUl = phraseDiv.firstElementChild;

        let liHTMLCollection = document.getElementsByClassName("letter");
        let liHtmlCollectionSpaceClass = document.getElementsByClassName("space");

        let liSpace = Array.from(liHtmlCollectionSpaceClass);
        let li = Array.from(liHTMLCollection);

        for ( let i = 0; i < li.length; i++) {
            let currentLi = li[i];
            phraseUl.removeChild(currentLi);
        }

        for  ( let i = 0; i < liSpace.length; i++) {
            let currentLi = liSpace[i];
            phraseUl.removeChild(currentLi);
        }

        keyElements.forEach( element => {
          element.disabled = false;
          element.className = 'key';
        })
        let allLives = document.querySelectorAll('li.tries img');
        allLives.forEach(heart => {
            heart.src = 'images/liveHeart.png';
        })
        this.missed = 0;
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

