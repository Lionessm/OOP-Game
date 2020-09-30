
class Phrase {
    constructor(phrase) {
       this.phrase = phrase.toLowerCase();
    }

    // Split phrase in new array; iterate through current phrase letter;
    // Give class name space if there is a space or hide letter for letter;
    // Add text content of letter to li element and append the li elements to the ul (div : "phrase")
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

    // Check if selected letter matches a letter in the phrase.
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

    // Reveal matched letters. Add class name of 'show' to all elements that match the selected letter.
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



