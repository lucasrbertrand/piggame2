'use strict';

// Selecting Elements

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const diceShow = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const scoreP0 = document.querySelector('#score--0');
const scoreP1 = document.querySelector('#score--1');
const currentP0 = document.querySelector('#current--0');
const currentP1 = document.querySelector('#current--1');

const playerSwitch = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// scores is an array to keep track of both points
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

//Setting score to zero
scoreP0.textContent = 0;
scoreP1.textContent = 0;

// Removing Dice at the start of the game
diceShow.classList.add('hidden');

// Rolling the Dice

btnRoll.addEventListener('click', function () {
  //ADDED BOOLEAN VARIABLE PLAYING TO REFACTOR
  if (playing) {
    // 1. Generating a random number beetween 1-6
    const diceValue = Math.trunc(Math.random() * 6) + 1;

    // 2. NEED TO REMOVE THE HIDDEN CLASS
    diceShow.classList.remove('hidden');

    // 3. Check and display dice img
    diceShow.src = `./assets/img/dice-${diceValue}.png`;

    // 4. Check for diceValue = 1, if its true then switch to player 2
    if (diceValue !== 1) {
      // Add dice to current score, set function outside cause if not it will not save
      currentScore += diceValue;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //Switching to second player here
      playerSwitch();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1. Add current score to active player score
    //scores[1] = scores[1] + currentScore;
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2. Check if players score is >= 100
    if (scores[activePlayer] >= 100) {
      // set playing to false so when it finish code wont be executed
      playing = false;
      diceShow.classList.add('hidden');
      //If so finish the game
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //If not, change player!
      playerSwitch();
    }
  }
});
