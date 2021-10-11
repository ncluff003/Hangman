import { createApp } from "vue";
import { App } from "./App.vue";

createApp(App).mount("#app");

// Setting initial page up
const startButton = document.querySelector(".game-start-button");

// Receiving user input to start game
const setup = document.querySelector(".game-start-setup");
const startGame = document.querySelector(".game-start__submit-word");

// Starting the game for guesses
const game = document.querySelector(".game-container");
const alpha = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
const alphabet = [...alpha.split(" ")];
const guessingLetters = document.querySelector(".letters-to-guess");
const gallowsImages = [
  "./src/assets/gallows-base.svg",
  "./src/assets/gallows-pole.svg",
  "./src/assets/gallows-support-beam.svg",
  "./src/assets/gallows-head.svg",
  "./src/assets/gallows-torso.svg",
  "./src/assets/gallows-left-arm.svg",
  "./src/assets/gallows-right-arm.svg",
  "./src/assets/gallows-left-leg.svg",
  "./src/assets/gallows-game-over.svg",
];
let wrongGuesses = 0;
let word;

const userInput = document.querySelector(".game-start__word-or-phrase");
const gallows = document.querySelector(".hangman-gallows");
const wordToGuess = document.querySelector(".hangman-word");
const message = document.querySelector(".game-message");

const reset = document.querySelector(".game-reset");

startButton.addEventListener("click", (e) => {
  e.preventDefault();
  startButton.style.display = "none";
  setup.style.display = "flex";
  userInput.focus();
});

startGame.addEventListener("click", (e) => {
  if (!userInput.value || userInput.value === "") return;
  setup.style.display = "none";
  document.querySelector(".game-start").style.display = "none";
  game.style.display = "flex";
  alphabet.forEach((letter) => {
    const listItem = document.createElement("li");
    listItem.classList.add("letter");
    listItem.textContent = letter.toUpperCase();
    guessingLetters.insertAdjacentElement("beforeend", listItem);
  });
  word = userInput.value.replace(/[a-zA-Z]/gi, "-");
  wordToGuess.textContent = word;
  return word;
});

guessingLetters.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    message.textContent === `You Won!` ||
    message.textContent === `You Lost!` ||
    message.textContent === `You must restart the game to guess more letters`
  ) {
    message.textContent = `You must restart the game to guess more letters`;
    return (message.style.color = `#cf352e`);
  }
  if (e.target.style.color === "rgba(108, 129, 204, 0.5)") {
    return (message.textContent = `You already guessed that letter`);
  }
  if (userInput.value.includes(e.target.textContent.toUpperCase())) {
    message.textContent = "Great Guess!";
    e.target.style.color = "rgba(108, 129, 204, 0.5)";
    word = word.split("");
    let Word = userInput.value.split("");
    Word.forEach((w, i) => {
      let character = Word[i];
      if (character.toUpperCase() === e.target.textContent) {
        word[i] = character;
      }
    });
    word = word.join("");
    wordToGuess.textContent = word;
    if (word === userInput.value) {
      message.textContent = `You Won!`;
      document.querySelector(".game-reset").style.display = "flex";
      document.querySelector(".hangman-word").style.display = "none";
    }
    return;
  }
  if (userInput.value.includes(e.target.textContent.toLowerCase())) {
    message.textContent = "Great Guess!";
    e.target.style.color = "rgba(108, 129, 204, 0.5)";
    word = word.split("");
    let Word = userInput.value.split("");
    Word.forEach((w, i) => {
      let character = Word[i];
      if (character.toUpperCase() === e.target.textContent) {
        word[i] = character;
      }
    });
    word = word.join("");
    wordToGuess.textContent = word;
    if (word === userInput.value) {
      message.textContent = `You Won!`;
      document.querySelector(".game-reset").style.display = "flex";
      document.querySelector(".hangman-word").style.display = "none";
    }
    return;
  }
  wrongGuesses++;
  message.textContent = "That letter does not exist!";
  gallows.style.backgroundImage = `url("${gallowsImages[wrongGuesses - 1]}")`;
  gallows.style.backgroundRepeat = "no-repeat";
  gallows.style.backgroundPosition = "center center";
  e.target.style.color = "rgba(108, 129, 204, 0.5)";
  if (wrongGuesses === gallowsImages.length) {
    message.textContent = `You Lost!`;
    document.querySelector(".game-reset").style.display = "flex";
    document.querySelector(".hangman-word").style.display = "none";
  }
});

reset.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("RESET");
  gallows.style.backgroundImage = "";
  reset.style.display = "none";
  message.textContent = "";
  document.querySelectorAll(".letter").forEach((l) => {
    l.style.color = `#FAFAFA`;
  });
  game.style.display = "none";
  document.querySelector(".game-start").style.display = "flex";
  setup.style.display = "flex";
  wordToGuess.style.display = "flex";
  wrongGuesses = 0;
  guessingLetters.innerHTML = "";
  userInput.value = "";
  userInput.focus();
  message.color = "rgba(108, 129, 204, 1)";
});
