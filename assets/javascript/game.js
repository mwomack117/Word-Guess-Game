// Possible words
var wordBank = ["unforgiven", "tombstone", "fistfull", "rio bravo", "cowboy", "indians",
    "saloon", "wild bunch", "magnificent seven", "hud", "maverick", "hostiles"];


var maxTries = 8; // Max tries player for player
var currentWord; // Index of the current word in the array
var underscoreArray = []; // Word user is trying to build to match currentWord. Correct letters guessed
var remainingGuesses = 0; // How many tries player has left
var guessedLetters = []; // Array to store letters already guessed in current game
var wins = 0; // How many times player has won
var alphabet = ["abckefghijklmnopqrstuvwxyz "];






// Display guesses available
remainingGuesses = maxTries;
document.getElementById("remainingGuesses").innerHTML = remainingGuesses;

// Picks random word from wordBank
currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];


// Make underscores with same amount as letters count for our current word
var chosenWordArray = currentWord.split("");

var underscoreArray = [];
for (let i = 0; i < chosenWordArray.length; i++) {
    underscoreArray.push("_");
}

var underscoreString = underscoreArray.join("");

document.getElementById("currentWord").innerHTML = underscoreString;







document.onkeyup = function (event) {

    var key = event.key.toLowerCase();
    if (alphabet.includes(key)) {

        for (var i = 0; i < chosenWordArray.length; i++) {
            if (chosenWordArray[i] === key) {
                underscoreArray[i] = key;
                underscoreString = underscoreArray.join("");

                document.getElementById("currentWord").innerHTML = underscoreString;
                
            }
        }
        if (chosenWordArray.includes(key) === false) {
            console.log("wrong letter: " + key);
            guessedLetters.push(key);
            document.getElementById("guessedLetters").innerHTML = guessedLetters;
        } else {
            console.log("character not recognized");
        }
    }
};

console.log(underscoreArray);
console.log(chosenWordArray);
console.log(underscoreString);
console.log(alphabet);
