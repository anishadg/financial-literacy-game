document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    const welcomeScreen = document.getElementById('welcome-screen');
    const gameContainer = document.getElementById('game-container');

    startButton.addEventListener('click', () => {
        welcomeScreen.classList.add('hidden');
        gameContainer.classList.remove('hidden');
    });
});