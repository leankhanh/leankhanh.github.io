const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const overlay = document.getElementById('overlay');
const startButton = document.querySelector('.btn__reset');
const keyrowButton = document.querySelectorAll('.keyrow button');
const ulList = document.querySelector('#phrase ul');
const letterClass = document.getElementsByClassName('letter');
const showClass = document.getElementsByClassName('show');
const title = document.querySelector('.title');
const hearts = document.querySelectorAll('.tries img');

let missed = 0;

const phrases = ['i love you',
                  'life is short',
                  'thank you',
                  'my sunshine',
                  'every moment matters',
                  'you are amazing',
                  'just do it',
                  'it hurts because it mattered',
                  'turn your wounds into wisdom'];

startButton.addEventListener('click', () => {
  overlay.style.display = 'none';
});

function getRandomPhraseAsArray(arr){
    //do stuff to any arr that is passed in
    const random = Math.floor(Math.random() * arr.length);
    const ranPhrase = phrases[random];
    const char = ranPhrase.split('');
    return char;
}

function addPhraseToDisplay(arr){
    // do stuff any arr that is passed in, and add to `#phrase ul`
    for (let i = 0; i < arr.length; i++) {
      const char = arr[i];
      const newList = document.createElement('li');
      newList.textContent = char;
      ulList.appendChild(newList);
      if (newList.textContent !== " ") {
        newList.classList.add("letter");
      } else {
        newList.classList.add("space");
      }
    }
}

let phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

function checkLetter(e) {
  let found = null;
  for (let i = 0; i < letterClass.length; i++) {
    if (e.target.textContent === letterClass[i].textContent) {
      found = true;
      letterClass[i].classList.add("show");
    }
  }
  return found;
}

function checkWin() {
  if (showClass.length === letterClass.length) {
    overlay.style.display = 'flex';
    overlay.classList.add("win");
    title.textContent = 'Congratulations on winning!';
    startButton.textContent = "Play again";
  } else if (missed === 5) {
    overlay.style.display = 'flex';
    overlay.classList.add("lose");
    title.textContent = 'Better luck next time';
    startButton.textContent = "Play again";
  }
}

qwerty.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    e.target.classList.add("chosen");
    e.target.setAttribute("disabled", true);
    const letterFound = checkLetter(e);
    if (letterFound === null) {
      let currentMissed = missed;
      hearts[currentMissed].setAttribute('src', 'images/lostHeart.png');
      missed += 1;
    }
  }
  checkWin();
});

startButton.addEventListener('click', (e) => {
  if (e.target.textContent === 'Play again') {
    missed = 0;

    // Reset hearts
    for (let i = 0; i < hearts.length; i++) {
      hearts[i].setAttribute('src', 'images/liveHeart.png');
    }

    // Delete last guessed word
    const listElement = document.querySelectorAll('ul li');
    for (let i = 0; i < listElement.length; i++) {
      ulList.removeChild(listElement[i]);
    }

    // Reset button's attributes
    for (let i = 0; i < keyrowButton.length; i++) {
      keyrowButton[i].classList.remove("chosen");
      keyrowButton[i].disabled = false;
    }

    // Add new phrase
    phraseArray = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(phraseArray);
  }
});
