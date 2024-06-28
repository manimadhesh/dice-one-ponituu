let player1 = document.querySelector('.player--0');
let player2 = document.querySelector('.player--1');
let score1 = document.querySelector('#score--0');
let score2 = document.querySelector('#score--1');
let currentScore1 = document.querySelector('#current--0');
let currentScore2 = document.querySelector('#current--1');

let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');
let btnNew = document.querySelector('.btn--new');

// dice imag
let diceImg = document.querySelector('.dice');

let activeUser = 0;
let currentScore = 0;
let scores = [0, 0];
let playing = true;

// opening

score1.textContent = 0;
score2.textContent = 0;
currentScore1.textContent = 0;
currentScore2.textContent = 0;
diceImg.classList.add('hidden');

// dice rolling and current score functionality;

btnRoll.addEventListener('click', function () {
  let rDice = Math.trunc(Math.random() * 6) + 1;
  console.log(rDice);

  if (playing) {
    if (rDice !== 1) {
      diceImg.classList.remove('hidden');
      diceImg.src = `dice-${rDice}.png`;
      currentScore = currentScore + rDice;
      document.querySelector(`#current--${activeUser}`).textContent =
        currentScore;
    } else {
      document.querySelector(`#current--${activeUser}`).textContent = 0;
      currentScore = 0;
      // switch user
      activeUser = activeUser === 0 ? 1 : 0;
      player1.classList.toggle('player--active');
      player2.classList.toggle('player--active');
    }
  }
});

// score holding functionality

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activeUser] += currentScore;
    document.querySelector(`#score--${activeUser}`).textContent =
      scores[activeUser];

    // winner

    if (scores[activeUser] >= 50) {
      playing = false;
      // hiding dice
      diceImg.classList.add('hidden');
      document
        .querySelector(`.player--${activeUser}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activeUser}`)
        .classList.remove('player--active');
    } else {
      document.querySelector(`#current--${activeUser}`).textContent = 0;
      currentScore = 0;
      // witch user
      activeUser = activeUser === 0 ? 1 : 0;
      player1.classList.toggle('player--active');
      player2.classList.toggle('player--active');
    }
  }
});

// new game functionality

btnNew.addEventListener('click', function () {
  activeUser = 0;
  currentScore = 0;
  scores = [0, 0];
  playing = true;

  // opening

  score1.textContent = 0;
  score2.textContent = 0;
  currentScore1.textContent = 0;
  currentScore2.textContent = 0;
  diceImg.classList.add('hidden');
  document
    .querySelector(`.player--${activeUser}`)
    .classList.remove('player--winner');
  document
    .querySelector(`.player--${activeUser}`)
    .classList.add('player--active');
});
