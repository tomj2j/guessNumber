'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🥳 Correct Number! 🎉';
document.querySelector('.number').textContent = '23';
document.querySelector('.score').textContent = '999';
document.querySelector('.highscore').textContent = '1337';

document.querySelector('.guess').value = '00';
*/

const secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);
document.querySelector('.number').textContent = secretNumber;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  const lostGame = function () {
    document.querySelector('.message').textContent = ' 🧨🤯 You lost!';
    document.querySelector('.score').textContent = 0;
  };

  const lowerPrintScore = function () {
    score--;
    document.querySelector('.score').textContent = score;
  };

  if (!guess) {
    document.querySelector('.message').textContent = ' 🐻‍❄️ No Number entered';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'CORRECT !! 🎉';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' 🛫 Too high!';
      lowerPrintScore();
    } else {
      lostGame();
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🛬 Too low!';
      lowerPrintScore();
    } else {
      lostGame();
    }
  }
});
