'use strict';
/*
console.log(document.querySelector('.message').textcontent);
document.querySelector('.message').textContent = 'Correct Answer';

document.querySelector('.number').textContent = 33;
document.querySelector('.score').textContent = 23;

document.querySelector('.guess').value = 7;
*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when guess is 0

  if (guess === 0) {
    document.querySelector('.message').textContent = 'No Number';
  }
  // when guess is correct
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Answer';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    document.querySelector('.message').textContent =
      guess > secretNumber ? 'Too High!' : 'too low!';
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost this game';
    }
  }

  /* // when guess is too high
  else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too High';
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost this game';
    }
  }
  // when guess is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost this game';
    }
  } */
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'start game again';
  document.querySelector('.guess').value = ' ';
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});

document.querySelector('.reset').addEventListener('click', function () {
  document.querySelector('.guess').value = '';
});
