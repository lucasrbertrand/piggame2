'use strict';

// Selecting Elements

//Dice Variables
const diceShow = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Score Variables
const scoreP1 = document.querySelector('#score--0');
const scoreP2 = document.querySelector('#score--1');
const currentP1 = document.querySelector('#current--0');
const currentP2 = document.querySelector('#current--1');

//Setting score to zero
scoreP1.textContent = 0;
scoreP2.textContent = 0;

// Removing Dice at the start of the game
diceShow.classList.add('hidden');

//Doing the score
let currentScore = 0;

// dice.style.display = 'none'
// Rolling the Dice

btnRoll.addEventListener('click', function () {
  // 1. Generating a random number beetween 1-6
  const diceValue = Math.trunc(Math.random() * 6) + 1;

  // 2. NEED TO REMOVE THE HIDDEN CLASS
  diceShow.classList.remove('hidden');

  // 3. Check and display dice img
  diceShow.src = `./assets/img/dice-${diceValue}.png`;

  // 4. Check for diceValue = 1, if its true then switch to player 2
  if (diceValue !== 1) {
    // Add dice to current score, set function outside cause if not it will not save
    currentScore += diceValue; //NEED TO CHANGE IT LATER
    currentP1.textContent = currentScore
  } else {
    //Switching to second player here
  }
});
