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
        selection();
        correctGuesses(guessedLetters);
    }
   
}

const selection = function () {
    guessedLetter.innerHTML = "";
    //const listItem = document.createElement("li");
    //guessedLetter.append(listItem);
    for (var letter of guessedLetters) {
        document.createElement("li")
        guessedLetter.append(letter)
}};

const correctGuesses = function (guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    console.log(wordArray);
    const correctArray = [];
    for (const letter of wordArray) {
    if (guessedLetters.includes(letter)) {
        
        correctArray.push(letter);
    }   else {
        correctArray.push("●")
    }
        wip.innerText = correctArray.join("");
        }
        success();
};

const success = function () {
    if (wip.innerText === word.toUpperCase()) {
        message.classList.add("win");
        message.classList.add("highlight")
        message.innerHTML = "You guessed the correct word! Congrats!"
    }
}