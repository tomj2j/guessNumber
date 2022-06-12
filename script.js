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

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = ' 🐻‍❄️ No Number entered';
  } else if (guess === secretNumber) document.querySelector('.message').textContent = 'CORRECT !! 🎉';
});
