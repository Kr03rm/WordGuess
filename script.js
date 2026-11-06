
// NUMLE - Number Guessing Game

// Game variables
let secretNumber;
let attempts;
let timeLeft;
let score;
let gameActive;
let timerInterval;

// HTML elements
const guessForm = document.getElementById("guess-form");
const guessInput = document.getElementById("guess");
const message = document.getElementById("message");
const history = document.getElementById("history");
const attemptsDisplay = document.getElementById("attempts");
const timerDisplay = document.getElementById("timer");
const scoreDisplay = document.getElementById("score");
const submitButton = document.getElementById("submit-btn");
const restartButton = document.getElementById("restart-btn");

// Start or restart the game
function startGame() {
    secretNumber = String(
        Math.floor(10000 + Math.random() * 90000)
    );

    attempts = 6;
    timeLeft = 120;
    score = 0;
    gameActive = true;

    attemptsDisplay.textContent = attempts;
    timerDisplay.textContent = timeLeft;
    scoreDisplay.textContent = score;

    message.textContent = "Enter your first guess!";
    history.innerHTML = "";
    guessInput.value = "";
    guessInput.disabled = false;
    submitButton.disabled = false;
    restartButton.hidden = true;

    clearInterval(timerInterval);

    timerInterval = setInterval(function() {
        if (!gameActive) return;

        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            endGame(false, "Time is up!");
        }
    }, 1000);

    guessInput.focus();
}

// Check the guess and provide feedback
function checkGuess(guess) {
    let feedback = Array(5).fill("absent");
    let remainingDigits = secretNumber.split("");

    // First pass: find correct positions
    for (let i = 0; i < 5; i++) {
        if (guess[i] === secretNumber[i]) {
            feedback[i] = "correct";
            remainingDigits[i] = null;
        }
    }

    // Second pass: find correct digits in wrong positions
    for (let i = 0; i < 5; i++) {
        if (feedback[i] === "correct") {
            continue;
        }

        const digitIndex = remainingDigits.indexOf(guess[i]);

        if (digitIndex !== -1) {
            feedback[i] = "present";
            remainingDigits[digitIndex] = null;
        }
    }

    return feedback;
}

// Display the guess and coloured feedback
function displayGuess(guess, feedback) {
    const row = document.createElement("div");
    row.className = "guess-row";

    for (let i = 0; i < 5; i++) {
        const tile = document.createElement("div");

        tile.className = "tile " + feedback[i];
        tile.textContent = guess[i];

        row.appendChild(tile);
    }

    history.appendChild(row);
}

// Handle the user's submitted guess
guessForm.addEventListener("submit", function(event) {
    event.preventDefault();

    if (!gameActive) return;

    const guess = guessInput.value.trim();

    // Validate the input
    if (!/^\d{5}$/.test(guess)) {
        message.textContent = "Please enter exactly 5 digits.";
        return;
    }

    // Calculate feedback
    const feedback = checkGuess(guess);

    displayGuess(guess, feedback);

    attempts--;
    attemptsDisplay.textContent = attempts;

    // Check if the player has won
    if (guess === secretNumber) {
        score = attempts * 100 + timeLeft;
        scoreDisplay.textContent = score;

        endGame(true, "Congratulations! You guessed correctly!");
    } else if (attempts === 0) {
        endGame(false, "Game over! The number was " + secretNumber);
    } else {
        message.textContent = "Not quite! Try again.";
    }

    guessInput.value = "";
    guessInput.focus();
});

// End the game
function endGame(won, resultMessage) {
    gameActive = false;

    clearInterval(timerInterval);

    message.textContent = resultMessage;

    if (!won) {
        score = 0;
        scoreDisplay.textContent = score;
    }

    guessInput.disabled = true;
    submitButton.disabled = true;
    restartButton.hidden = false;
}

// Restart button
restartButton.addEventListener("click", startGame);

// Start the first game
startGame();

