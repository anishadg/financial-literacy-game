// src/services/GameLogic.js

export function checkAnswer(selectedAnswer, correctAnswer) {
    return selectedAnswer === correctAnswer;
}

export function updateScore(currentScore, points) {
    return currentScore + points;
}

export function resetGame() {
    return {
        score: 0,
        currentQuestionIndex: 0,
    };
}