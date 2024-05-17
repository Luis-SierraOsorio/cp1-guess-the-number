'use strict';

// Query Selectors
const message = document.querySelector('.message');
const check = document.querySelector('.check');
const guess = document.querySelector('.guess');
const score = document.querySelector('.score');
const number = document.querySelector('.number');
const highscore = document.querySelector('.highscore');
const again = document.querySelector('.again');

// variables
let secretNumber = Math.trunc(Math.random() * 20) + 1
let scoreNumber = 20;
let highScoreNumber = 0;


// event handler for the check button
check.addEventListener('click', function () {
    // logic incase input is invalid
    if (!guess.value || guess.value < 1 || guess.value > 20) {
        message.textContent = "Choose a valid number!";
        guess.value = "";
        // alert("Must input a valid number");
        return
    }

    // checking if user lost
    if (scoreNumber < 1) {
        message.textContent = "You lost womp womp!";
        return;
    }

    // checking is user guessed wrong or correct and updating message/screen
    if (guess.value < secretNumber) {
        message.textContent = "Too low!";
        scoreNumber--;
    } else if (guess.value > secretNumber) {
        message.textContent = "Too high!";
        scoreNumber--;
    } else {
        message.textContent = "Correct!";
        // logic for highscore
        if (scoreNumber > highScoreNumber) {
            highScoreNumber = scoreNumber;
            highscore.textContent = highScoreNumber;
        }
        // displaying the secret number
        number.textContent = secretNumber;
        // changing background color
        document.querySelector('body').style.backgroundColor = '#60b347'
    }

    // updating the score
    score.textContent = scoreNumber;
})

// handling again button logic
again.addEventListener('click', function () {
    // resetting some of the variables
    scoreNumber = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    number.textContent = "?";
    score.textContent = scoreNumber;
    message.textContent = "Start guessing...";
    guess.value = "";
    document.querySelector('body').style.backgroundColor = '#222'
})