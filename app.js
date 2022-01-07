/*
GAME FUNCTION
-PLAYE MUST GUESS A NUMBER BETWEEN A MIN AND MAX NUM
-PLAYER GETS CERTAIN AMOUNT OF GUESSES
-NOTIFY PLAYER OF GUESSES REMAINING
-NOTIFY PLAYER OF THE CORRECT ANSWER IF LOOSE
-LET PLAYER CHOOSE PLAY AGAIN

*/

//GAME VALUES
let min = 1,
    max = 10,
    winninNum = getRandomNumber(min,max),
    guesseLeft = 3;

//UI Elements
const game = document.getElementById('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      messege = document.querySelector('.messege');

//assing UI min and Max
minNum.textContent = min;
maxNum.textContent = max;



//play again event listner
game.addEventListener('mousedown', function(e){
if(e.target.className === 'play-again'){
    window.location.reload();
}
})


//listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
    
//validate
    if(isNaN(guess) || guess < min || guess > max ) {
        setMessege(`Please enter a number between ${min} and ${max}`, 'red')
    }

//check if won
if(guess === winninNum){
gameOver(true, `${winninNum} is Correct! YOU WIN`);
}else{
//wrong number
guesseLeft -= 1;
if(guesseLeft === 0){
    //game over - lost
gameOver(false, `Game Over, you lost the correct number was ${winninNum}`)

}else{

//game continues answer wrong
//tell user this is the wrong number
setMessege(`guess is not correct ${guesseLeft} guesses left`, 'red');

//clear input
guessInput.value = '';


//change border color
guessInput.style.borderColor = 'red';



}


}

        
    
})



function setMessege(msg, color){
messege.style.color = color;
messege.textContent = msg;
}



function gameOver(won, msg){

let color;
won === true ? color = 'green': color = 'red';
//disable input
guessInput.disabled = true;


//change border color
guessInput.style.color = color;

//set text color
messege.style.color = color;        

//set messege
setMessege(msg);


//play again
guessBtn.value = 'Play Again';
guessBtn.className += 'play-again';


}

function getRandomNumber(min, max){
return Math.floor(Math.random()*(max - min + 1)+min)
}


