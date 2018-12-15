//Establish variables for Elements 
var start = document.getElementById('start');
var placeholders = document.getElementById('placeholders');
var guessed = document.getElementById('wrong-guess');
var guessesRemaining = document.getElementById('guesses-left');
var gamesWon = document.getElementById('wins');
var gamesLost = document.getElementById('losses');

//Variables for game
var words = ['hyena','snake','rhino','ostrich','zebra','tiger'];
var guessesLeft = 6;
var wins = 0;
var losses = 0;
var guessedLetterBank = [];
var wrongLetterBank = [];
var wordPlaceholder = [];
var chosenWord = '';
var gameRunning = false;

//Create placeholder and start game
function startGame() {
    gameRunning = true;
    guessesLeft = 6;
    guessedLetterBank = [];
    wrongLetterBank = [];
    wordPlaceholder = [];

    chosenWord = words [Math.floor(Math.random() * words.length)];
    console.log(chosenWord)
    for (i = 0; i < chosenWord.length; i++ ){
      if (chosenWord[i] === ' '){
          wordPlaceholder.push(' ');
      } else {
          wordPlaceholder.push('_');
      }
    }
 //Update Elements on page
guessesRemaining.textContent = guessesLeft;
placeholders.textContent = wordPlaceholder;
guessed.textContent = wrongLetterBank;   
}

function letterGuess(letter) 
{
    console.log(letter);

    if (gameRunning === true && guessedLetterBank.indexOf(letter) === -1) {
        guessedLetterBank.push(letter)
        if(chosenWord.includes(letter,0))
        {
            var x = chosenWord.indexOf(letter)
            wordPlaceholder[x] = letter
        }
        else{
            wrongLetterBank.push(letter)
            guessesLeft=guessesLeft-1
        }
        if (guessesLeft == 0) {
            gameRunning = false
            losses = losses+1
        }
        if (wordPlaceholder.includes('_',0) == false){
            wins = wins +1
            gameRunning = true;
            guessesLeft = 6;
            guessedLetterBank = [];
            wrongLetterBank = [];
            wordPlaceholder = [];

            chosenWord = words [Math.floor(Math.random() * words.length)];
            console.log(chosenWord)
            for (i = 0; i < chosenWord.length; i++ ){
                if (chosenWord[i] === ' '){
                    wordPlaceholder.push(' ');
                } else {
                    wordPlaceholder.push('_');
                }
            }

        }
        guessesRemaining.textContent = guessesLeft;
        placeholders.textContent = wordPlaceholder;
        guessed.textContent = wrongLetterBank;
        gamesLost.textContent = losses;
        gamesWon.textContent = wins;
    }
}


//start button
document.getElementById('start').addEventListener('click', startGame);

//functoion for key press response
document.onkeyup = function(event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        letterGuess(event.key);
    }
}
