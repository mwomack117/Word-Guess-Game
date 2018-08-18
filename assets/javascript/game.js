// Possible words
var wordBank = ["unforgiven", "tombstone", "cowboy", "indians",
    "saloon", "hud", "maverick", "hostiles", "lasso",
    "whip", "spurs", "mustang", "rodeo", "stampede", "shootout"];



var currentWord; // Index of the current word in the array
var underscoreArray = []; // Word user is trying to build to match currentWord. Correct letters guessed
var remainingGuesses = 8; // How many tries player has left
var guessedLetters = []; // Array to store letters already guessed in current game
var wins = 0; // How many times player has won
var chosenWordArray;
var underscoreString;


// Create function that resets variables for start of game
function startGame() {

    // Picks random word from wordBank
    currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];

    // Make underscores with same amount as letters count for our current word
    chosenWordArray = currentWord.split("");

    for (let i = 0; i < chosenWordArray.length; i++) {
        underscoreArray.push("_");
    }

    underscoreString = underscoreArray.join("");

    document.getElementById("currentWord").innerHTML = underscoreString;

    guessedLetters = [];

    document.getElementById("remainingGuesses").innerHTML = remainingGuesses;

};

startGame();

// trial code start
// Checks for a win by seeing if there are any remaining underscores in the guessingword we are building.


document.onkeyup = function (event) {

    var key = event.key.toLowerCase();



    for (var i = 0; i < chosenWordArray.length; i++) {
        if (chosenWordArray[i] === key) {
            underscoreArray[i] = key;
            underscoreString = underscoreArray.join(""); 4
            document.getElementById("currentWord").innerHTML = underscoreString;

        }
    }
    if (chosenWordArray.includes(key) === false) {
        guessedLetters.push(key);
        remainingGuesses--;
        document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
        document.getElementById("guessedLetters").innerHTML = guessedLetters;
    }
};

console.log(underscoreArray);
console.log(chosenWordArray);
console.log(underscoreString)
console.log(currentWord);
