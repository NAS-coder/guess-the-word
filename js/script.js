const guessedLetter = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const textInput = document.querySelector(".letter");
const wip = document.querySelector(".word-in-progress");
const remainingWords = document.querySelector(".remaining");
const remainingAlert = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const hiddenButton = document.querySelector(".play-again");
let word = "magnolia";
let guessedLetters = [];
let remainingGuesses = 8;


const getWord = async function () {
    const getData = await fetch (
        "https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt"
    );
    const words = await getData.text();
    console.log(words);
    const wordArray = words.split("\n") //to convert the fetched list of results into an array//
    console.log(wordArray);

    const randomWord = function (wordArray) {
        const randomIndex = Math.floor(Math.random() * wordArray.length);
        //console.log(randomIndex);

    word = wordArray[randomIndex];
    

    console.log(word.trim());
         
     };
    randomWord(wordArray);
    start(word)
    
       
};

getWord();

const start = function (word) {
    selectedLetters = [];
    for (const letter of word) {
        selectedLetters.push("●");
        //console.log(letter);
    }
    wip.innerText = selectedLetters.join("");
    //console.log(wip.innerText.join(""));
};


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
        guessesLeft(letter);
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

const guessesLeft = function (letter) {
    const upperWord = word.toUpperCase();
    if (! upperWord.includes(letter)) {
        message.innerText = "Wrong guess!"
        remainingGuesses -= 1;
    } else {
        message.innerText = "Right choice!"
    }
    if (remainingGuesses === 0) {
        message.innerText = `Game over! The correct word is ${upperWord}.`

    } else if (remainingGuesses === 1) {
        remainingAlert.innerText = `${remainingGuesses} guess`;
    } else {
        remainingAlert.innerText = `${remainingGuesses} guesses`
    }
    startOver();
}


const success = function () {
    if (wip.innerText === word.toUpperCase()) {
        message.classList.add("win");
        message.classList.add("highlight")
        message.innerHTML = "You guessed the correct word! Congrats!"
        guessButton.classList.add("hide");
        hiddenButton.classList.remove("hide");
        guessedLetter.classList.add("hide");
        //remainingAlert.classList.add("hide");
        //remainingWords.classList.add("hide");

    }
};

const startOver = function () {
    if  (remainingGuesses === 0) {
        guessButton.classList.add("hide");
        hiddenButton.classList.remove("hide");
        guessedLetter.classList.add("hide");
        //remainingAlert.classList.add("hide");
        remainingWords.classList.add("hide");

    }
}

hiddenButton.addEventListener ("click", function () {
   message.classList.remove("win");
    message.innerText = "";
    guessedLetter.innerHTML = "";
    guessedLetters = [];
    remainingGuesses = 8;
    remainingAlert.innerText = `${remainingGuesses} guesses`;
    guessButton.classList.remove("hide");
    remainingWords.classList.remove("hide");
    remainingAlert.classList.remove("hide");
    hiddenButton.classList.add("hide");
    guessedLetter.classList.remove("hide");
    getWord();


})