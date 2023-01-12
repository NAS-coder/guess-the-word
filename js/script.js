const guessedLetter = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const textInput = document.querySelector(".letter");
const wip = document.querySelector(".word-in-progress");
const remainingWords = document.querySelector(".remaining");
const remainingGuesses = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const hiddenButton = document.querySelector(".play-again");
const word = "magnolia";
const guessedLetters = [];

const start = function (word) {
    selectedLetters = [];
    for (const letter of word) {
        selectedLetters.push("●");
        //console.log(letter);
    }
    wip.innerText = selectedLetters.join("");
    //console.log(wip.innerText.join(""));
};
start(word);

guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    const inputCapture = textInput.value;
    //console.log(inputCapture);
    //for (const e of textInput) {
    //    inputCapture.splice();
 // };
 textInput.value = "";
 message.innerText = "";
 const pressingButton = validation(inputCapture)
 makeGuess(inputCapture);
})



const validation = function (input) {
  const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        message.innerText =  "Please, enter a letter."
    } else if (input.length > 1 ) {
        message.innerText = "Error. Please, enter only one letter at a time."
    } else if (! input.match(acceptedLetter)) {
        message.innerText = "Please, enter a letter from A to Z."
    } else {
        return input;
   }
}

const makeGuess = function (letter) {
    letter = letter.toUpperCase();
    if (guessedLetters.includes(letter)) {
        message.innerText = "Letter already guessed. Choose another letter."
    } else {
        guessedLetters.push(letter);
        console.log(guessedLetters);
    }
   
}