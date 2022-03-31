const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;
const startGame = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');


    startGame.addEventListener('click', (e) =>{
    overlay.style.display ='none';
});

 const phrases =['This is the way', 'What you see is what you get', 'Hakuna Matata', 'Come what may', 'It is what I make of it'];

 function getRandomPhraseAsArray(phrases){
    const randomPhrase = Math.floor(Math.random() * phrases.length);
    console.log(randomPhrase);
    

  } 
  getRandomPhraseAsArray(phrases);
