/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
       this.phrase = phrase.toLowerCase();
    }


    addPhraseToDisplay() {
        const currentPhrase = this.phrase.split('');
        const phraseDiv = document.getElementById("phrase");
        const phraseUl = phraseDiv.firstElementChild;

        for (let i = 0; i < currentPhrase.length; i++) {
            const currentLetter = currentPhrase[i];

            const currentLetterLi = document.createElement('li');
            if (currentLetter === " ") {
                currentLetterLi.className = "space";
            } else {
                currentLetterLi.className = "hide letter " + currentLetter;
            }

            currentLetterLi.textContent = currentLetter;
            phraseUl.appendChild(currentLetterLi);
        }
        };

    checkLetter(letter) {
        const currentPhrase = this.phrase.split('');
        for ( let i = 0; i < currentPhrase.length; i++) {
            let currentPhraseLetter = currentPhrase[i];
            if (currentPhraseLetter === letter) {
               return true;
            }
        }
        return false;

    }

    showMatchedLetter(letter) {
        const hiddenLettersOnScreen = document.getElementsByClassName("letter " + letter);
        for (let i = 0; i < hiddenLettersOnScreen.length; i++) {
           let currentLetter = hiddenLettersOnScreen[i];
           if (currentLetter.textContent === letter) {
               currentLetter.className = "show letter " + letter;
           }
        }
    };
}



