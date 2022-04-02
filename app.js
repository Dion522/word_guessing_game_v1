const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;
const startGame = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const ul = document.querySelector('#phrase ul');


    startGame.addEventListener('click', (e) =>{
    overlay.style.display ='none';
});

 const phrases =['This is the way', 'What you see is what you get', 'Hakuna Matata', 'Come what may', 'It is what I make of it'];

 function getRandomPhraseAsArray(){
    const randomPhrase = Math.floor(Math.random() * phrases.length);
    const newPhrase = phrases[randomPhrase];
    const splitPhrase = newPhrase.split('');
    return splitPhrase;     

  } 

  function addPhraseToDisplay (arr){
      for(let i=0; i < phrases.length; i+=1 ){
    let li = document.createElement('li');
    li.textContent = phrases[i];
    if(phrases[i] !== ' '){
        li.classList.add ('letter');
    }else {
        li.classList.add ('space');
      }
      ul.appendChild(li);
      
    
    }

  }
  const phraseArray = getRandomPhraseAsArray(phrases);
  addPhrasetoDisplay(phraseArray);
  
 function checkLetter(button){
    const letter = document.querySelectorAll('.letter');
    let match= null;
    for(let i = 0; i < letter.length; i++){
        if(letter.textContent === button.textContent){
            letter[i].classList.add('show');
            match =button.textContent;
        }
    }

 }