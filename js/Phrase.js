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
        console.log("amintrat in checkLetter")
        console.log("letter pricipala :" + letter)
        const currentPhrase = this.phrase.split('');
        console.log("curentPhrase :" + currentPhrase);
        for ( let i = 0; i < currentPhrase.length; i++) {
            console.log('i ' + i);
            console.log("am intrat in for de la checkletter")
            let currentPhraseLetter = currentPhrase[i];
            console.log('currentPhraseLetter ' + currentPhraseLetter);
            if (currentPhraseLetter === letter) {
                console.log("letter " + letter);
                console.log("facem return true");
               return true;
            }
        }
        console.log("facem return false");
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



