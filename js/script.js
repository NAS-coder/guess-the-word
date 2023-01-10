const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const textInput = document.querySelector(".letter");
const wip = document.querySelector(".word-in-progress");
const remainingWords = document.querySelector(".remaining");
const remainingGuesses = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const hiddenButton = document.querySelector(".play-again");
const word = "magnolia";

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
    console.log(inputCapture);
    //for (const e of textInput) {
    //    inputCapture.splice();
 // };
 textInput.value = "";
})
