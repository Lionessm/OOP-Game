class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [];
        this.activePhrase = null;
    }
    // Adds phrase to the phrases array.
    createPhrases(phrase) {
        this.phrases.push(phrase)
    }

    // Gets a phrase and returns it.
    getRandomPhrase( ) {
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
        let randomPhraseIndex = getRandomInt(5);
        return this.phrases[randomPhraseIndex];
    }

    // Hides screen overlay, calls a new phrase and displays it.
    startGame() {
        this.gameReset();
        const overlayScreen = document.getElementById("overlay");
        overlayScreen.style.display = "none";
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }
    // Checks if player revealed all the letters in the current phrase.
    checkForWin() {
        let unmatchedLetters = document.getElementsByClassName("hide letter");
        if (unmatchedLetters.length === 0){
            return true;
        } else {
            return false;
        }
    }

    // Changes heart image on scoreboard with lost heart and increments the missed property.
    // If player has 4 missed guesses, call GameOver().
    removeLife() {
        let allLives = document.querySelectorAll('li.tries img');
        allLives[this.missed].src = 'images/lostHeart.png';

        if (this.missed === 4) {
            this.gameOver();
        }
        this.missed += 1;
    }

    // Display original start overlay, and update h1 element with winning or losing message and color.
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

    // Update keys className and disables them when clicked, checks if player revealed all the letters in phrase - checkForWin();
    // If player revealed all letters, call gmeOver(true) that displays winning message and color.
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

    // Reset game
    gameReset() {
        // Remove all 'li' elements from previous game.
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

        // Enable keys and set className to key (original class).
        keyElements.forEach( element => {
          element.disabled = false;
          element.className = 'key';
        })

        // Reset lives image to 'liveHeart.png' and reset 'missed' guesses to 0.
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

