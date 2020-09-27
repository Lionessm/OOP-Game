/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// event listener for the "Start Game" button, that initiates the game by calling the startGame method

document.getElementById('btn__reset').addEventListener( 'click' , (e) => {
        game.startGame();
    });
