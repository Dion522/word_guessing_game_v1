const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
let missed = 0;
const startGame = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const ul = document.querySelector('#phrase ul');

//Add a event listener to the “Start Game” button to hide the start screen overlay.
    startGame.addEventListener('click', (e) =>{
    overlay.style.display ='none';
});
// Array that contains at least 5 different phrases as strings.
 const phrases =['This is the way', 'What you see is what you get', 'Hakuna Matata', 'Come what may', 'It is what I make of it'];

 // Function that gets random phrase from arry and split phrase into new array
 //and returns new array.
 function getRandomPhraseAsArray(){
    const randomPhrase = Math.floor(Math.random() * phrases.length);
    const newPhrase = phrases[randomPhrase];
    const splitPhrase = newPhrase.split('');
    return splitPhrase;     

  } 
// Function that loops through letters and creates a list item then appends to #phrase ul
  function addPhraseToDisplay (arr){
      for(let i=0; i < arr.length; i++ ){
    let li = document.createElement('li');
    li.textContent = arr[i];
    if(arr[i] !== ' '){
        li.classList.add ('letter');
    }else {
        li.classList.add ('space');
      }
      ul.appendChild(li);
      
    
    }
     

  }

  const phraseArray = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(phraseArray);
 
  //Function that checks if button clicked matches letter from phrase array.
 function checkLetter(button){
    const letter = document.querySelectorAll('.letter');
    let match = null;
    for(let i = 0; i < letter.length; i++){
        if(letter[i] === button.textContent){
            letter[i].classList.add('show');
            match = button.textContent;
            
      
    }
    return match;
   }
 } 
//addEventListener that adds a class of "Chosen" to button so it can't be chosen twice and disables button.
// If checkLetter functions returns null, remove one of the tries channge liveHeart to lostHeart.png 
qwerty.addEventListener('click', (e) =>{
    let buttonChosen = e.target;
    if(buttonChosen.tagName ==='BUTTON'){
        buttonChosen.classList.add('chosen');
        buttonChosen.disable = true;

        let letterFound= checkLetter(buttonChosen);

        if(letterFound = 'null'){
            const removeTry = document.querySelector('.tries');
            removeTry.remove();
            missed ++;
            document.querySelector(".tries").src="images/lostHeart.png";
            

        }
    }

    
    checkWin();

 });

function checkWin(){
    const letterClass = document.querySelectorAll('.letter');
    const showClass = document.querySelectorAll('.show');

    if(letterClass.length === showClass.length){
        overlay.classList.add('win');
        document.querySelector('.title').textContent = " You Win!";
        overlay.style.display = 'flex'; 


    }else if  (missed > 4){
        overlay.classList.add('lose');
        document.querySelector('.title').textContent = "You lose!";
        overlay.style.display = 'flex'; 
    }
}





