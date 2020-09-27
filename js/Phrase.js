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
            console.log()
        }
    };


    checkLetter() {

    };

    showMatchedLetter() {

    };
}



