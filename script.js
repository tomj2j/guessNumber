'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '๐ฅณ Correct Number! ๐';
document.querySelector('.number').textContent = '23';
document.querySelector('.score').textContent = '999';
document.querySelector('.highscore').textContent = '1337';

document.querySelector('.guess').value = '00';
*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);
// Show Secretnumber :)
//document.querySelector('.number').textContent = secretNumber;

let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log('check pressed');

  //lostGame Function
  const lostGame = function () {
    document.querySelector('.message').textContent = ' ๐งจ๐คฏ You lost!';
    document.querySelector('.score').textContent = 0;
    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('.title').textContent =
      '๐๐ Oh No You Failed ๐๐ ';
    document.querySelector('.check').textContent = 'oh No! ๐คฏ';
  };
  //winGame Function
  const winGame = function () {
    document.querySelector('.message').textContent = 'CORRECT !! ๐';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.title').textContent =
      '๐๐ OMG YOU DID IT !!! ๐๐';
    document.querySelector('.check').textContent = 'YAY !! ๐';
    document.querySelector('.number').textContent = secretNumber;
    //Highscore will be updated
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  };

  //resetGame Function
  const resetGame = function () {
    document.querySelector('.message').textContent =
      'Yes, another try! Go Tiger!';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.title').textContent = 'Guess My Number!';
    document.querySelector('.check').textContent = 'Check!';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    score = 20;
    document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    console.log(secretNumber);
  };

  const lowerPrintScore = function () {
    score--;
    document.querySelector('.score').textContent = score;
  };

  // No Correct input
  if (!guess) {
    document.querySelector('.message').textContent = ' ๐ปโโ๏ธ No Number entered';

    //CorrectNumber guessed PLAYER WINS!
  } else if (guess === secretNumber) {
    winGame();

    //Number is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' ๐ซ Too high!';
      lowerPrintScore();
    } else {
      lostGame();
    }
    //Number is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '๐ฌ Too low!';
      lowerPrintScore();
    } else {
      lostGame();
    }
  }
  document.querySelector('.again').addEventListener('click', function () {
    console.log('Again pressed');
    resetGame();
  });
});
