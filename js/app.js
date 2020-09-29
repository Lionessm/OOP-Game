/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// event listener for the "Start Game" button, that initiates the game by calling the startGame method

document.getElementById('btn__reset').addEventListener( 'click' , (e) => {
    game.startGame();
});


let keyElements = document.querySelectorAll('button');

for (let i = 0; i < keyElements.length; i++) {
    keyElements[i].addEventListener('click', (e) => {
        game.handleInteraction(e.target);
    })
}