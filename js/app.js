// Event listener for the "Start Game" button, that initiates the game by calling the startGame method.
document.getElementById('btn__reset').addEventListener( 'click' , (e) => {
    game.startGame();
});

// Select keys of the keyboard.
let keyElements = document.querySelectorAll('button.key');

// Search for events in every key element.
for (let i = 0; i < keyElements.length; i++) {
    keyElements[i].addEventListener('click', (e) => {
        game.handleInteraction(e.target);
    })
}