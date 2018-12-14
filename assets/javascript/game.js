//Establish variables for Elements 
var start = document.getElementById('start');
var placeholders = document.getElementById('placeholders');
var guessed = document.getElementById('wrong-guess');
var guessesRemaining = document.getElementById('guesses-left');
var gamesWon = document.getElementById('wins');
var gamesLost = document.getElementById('losses');

//Variables for game
var words = ['water buffalo','giraffe','rhino','elephant','zebra','tiger'];
var guessesLeft = 6;
var wins = 0;
var loses = 0;
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

document.addEventListener('click',start);
