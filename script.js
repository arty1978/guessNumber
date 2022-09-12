'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

function dispalyMsg(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.body.style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = "?";



    document.querySelector('.guess').value = '';
});

document.querySelector('.check').addEventListener('click', () => {
    console.log(secretNumber);
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        dispalyMsg('⛔ No Number');
    } else if (guess === secretNumber) {
        document.querySelector('.highscore').textContent = highScore < score ? highScore = score : highScore;

        dispalyMsg('You did it My friend! 🎉🎊');

        document.querySelector('.number').textContent = secretNumber;

        document.body.style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'

    } else {
        dispalyMsg(guess > secretNumber ? '📈 The number is to HIGH!' : '📉 The number is to LOW!');
        score--;
        document.querySelector('.score').textContent = score;
        if (score === 0) {
            dispalyMsg('☠ You lost! Try again');
        }
    }
});

// if (guess !== secretNumber) 


