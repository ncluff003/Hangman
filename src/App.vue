<script setup></script>

<template>
  <div class="master-flex-container">
    <div class="game-start">
      <h1 class="game-start-title">Hangman</h1>
      <button class="game-start-button">Wanna Play?</button>
      <div class="game-start-setup">
        <input type="text" class="game-start__word-or-phrase" />
        <p class="game-start__question">What word(s) are to be guessed?</p>
        <button class="game-start__submit-word" type="submit">Continue</button>
      </div>
    </div>
    <div class="game-container">
      <header class="game-title">Hangman</header>
      <h2 class="game-sub-title">Letters To Guess</h2>
      <ul class="letters-to-guess"></ul>
      <section class="hangman-gallows"></section>
      <section class="hangman-word"></section>
      <section class="game-message"></section>
      <button class="game-reset">Play Again?</button>
    </div>
  </div>
</template>

<style>
*,
*::before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
  position: relative;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  background-color: #3a55b8;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.master-flex-container {
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.master-flex-container .game-start {
  position: relative;
  height: 100vh;
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.master-flex-container .game-start .game-start-title,
.master-flex-container .game-container .game-title {
  position: relative;
  font-size: 10rem;
  font-family: MADE Tommy Soft, sans-serif;
  font-weight: 800;
  color: #fafafa;
}

.master-flex-container .game-start .game-start-button {
  position: relative;
  font-size: 4rem;
  font-family: MADE Tommy Soft, sans-serif;
  font-weight: 800;
  padding: 2rem;
  margin-top: 2rem;
  width: 95%;
  background-color: transparent;
  border: 0.3rem solid rgba(108, 129, 204, 0.5);
  border-radius: 2rem;
  color: rgba(108, 129, 204, 0.5);
  transition: border 0.5s, color 0.5s, background-color 0.5s;
}

.master-flex-container .game-start .game-start-button:hover {
  background-color: rgba(108, 129, 204, 1);
  border: 0.3rem solid rgba(108, 129, 204, 1);
  color: #3a55b8;
  cursor: pointer;
}

.master-flex-container .game-start .game-start-setup {
  position: relative;
  height: max-content;
  margin-top: 2rem;
  width: 100%;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.master-flex-container .game-start .game-start-setup .game-start__word-or-phrase {
  position: relative;
  font-size: 4rem;
  font-family: MADE Tommy Soft, sans-serif;
  background-color: transparent;
  text-align: center;
  border: none;
  border-bottom: 0.3rem solid rgba(108, 129, 204, 0.5);
  color: rgba(108, 129, 204, 1);
  padding: 1rem;
  transition: border 0.5s;
  display: flex;
}

.master-flex-container .game-start .game-start-setup .game-start__word-or-phrase:focus {
  caret-color: rgba(108, 129, 204, 1);
  border-bottom: 0.3rem solid rgba(108, 129, 204, 1);
  outline: none;
}

.master-flex-container .game-start .game-start-setup .game-start__question {
  position: relative;
  font-size: 2rem;
  font-family: MADE Tommy Soft, sans-serif;
  color: rgba(108, 129, 204, 1);
  margin-top: 1rem;
  display: flex;
}

.master-flex-container .game-start .game-start-setup .game-start__submit-word {
  position: relative;
  width: 95%;
  background-color: transparent;
  border: 0.3rem solid rgba(108, 129, 204, 0.5);
  border-radius: 2rem;
  color: rgba(108, 129, 204, 0.5);
  transition: border 0.5s, color 0.5s, background-color 0.5s;
  font-size: 3rem;
  font-family: MADE Tommy Soft, sans-serif;
  padding: 2rem;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.master-flex-container .game-start .game-start-setup .game-start__submit-word:hover {
  background-color: rgba(108, 129, 204, 1);
  border: 0.3rem solid rgba(108, 129, 204, 1);
  color: #3a55b8;
  cursor: pointer;
}

.master-flex-container .game-container {
  position: relative;
  height: 100vh;
  width: 35%;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.master-flex-container .game-container .game-title {
  position: relative;
  display: flex;
  list-style: none;
  margin: 1rem 0;
}

.master-flex-container .game-container .game-sub-title {
  position: relative;
  margin: 1rem 0;
  font-size: 2.4rem;
  color: rgba(250, 250, 250, 1);
}

.master-flex-container .game-container .letters-to-guess {
  position: relative;
  display: flex;
  list-style: none;
}

.master-flex-container .game-container .letters-to-guess li {
  position: relative;
  margin: 1rem 0.5rem;
  font-size: 2rem;
  color: rgba(250, 250, 250, 0.85);
  transition: color 0.5s;
}

.master-flex-container .game-container .letters-to-guess li:hover {
  cursor: pointer;
  color: rgba(250, 250, 250, 1);
}

.master-flex-container .game-container .hangman-gallows {
  position: relative;
  min-height: 55rem;
  width: 100%;
  background-size: 200%;
  background-repeat: no-repeat;
}

.master-flex-container .game-container .hangman-word {
  position: relative;
  height: 15%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  color: rgba(108, 129, 204, 1);
}

.master-flex-container .game-container .game-message {
  position: relative;
  height: 15%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: rgba(108, 129, 204, 1);
}

.master-flex-container .game-container .game-reset {
  position: relative;
  height: 15%;
  width: 50%;
  display: none;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: rgba(108, 129, 204, 0.5);
  margin-bottom: 2rem;
  background-color: transparent;
  border: 0.3rem solid rgba(108, 129, 204, 0.5);
  border-radius: 2rem;
  transition: background-color 0.5s, color 0.5s;
}

.master-flex-container .game-container .game-reset:hover {
  color: #3a55b8;
  margin-bottom: 2rem;
  background-color: rgba(108, 129, 204, 1);
  border: 0.3rem solid rgba(108, 129, 204, 1);
  cursor: pointer;
}

@media screen and (max-width: 1400px) and (max-height: 1050px) {
  .master-flex-container .game-start,
  .master-flex-container .game-container {
    width: 60%;
  }
  .master-flex-container .game-start .game-start-button {
    width: 65%;
  }

  .master-flex-container .game-start .game-start-setup .game-start__submit-word {
    width: 65%;
  }
  .master-flex-container .game-container .hangman-gallows {
    background-size: 200%;
  }
}

@media screen and (max-width: 1050px) and (max-height: 1400px) {
  .master-flex-container .game-start,
  .master-flex-container .game-container {
    width: 60%;
  }

  .master-flex-container .game-container .game-reset {
    height: 7rem;
  }
}

@media screen and (max-width: 1050px) and (max-height: 800px) {
  .master-flex-container .game-start,
  .master-flex-container .game-container {
    width: 80%;
  }
  .master-flex-container .game-container .hangman-gallows {
    background-size: 150%;
    min-height: 40rem;
  }
  .master-flex-container .game-container .game-message,
  .master-flex-container .game-container .hangman-word {
    height: 7rem;
  }
}

@media screen and (max-width: 800px) and (max-height: 1050px) {
  .master-flex-container .game-container .hangman-gallows {
    background-size: 200%;
    min-height: 40rem;
  }
  .master-flex-container .game-container .game-message,
  .master-flex-container .game-container .hangman-word {
    height: 7rem;
  }
}

/* Large Phone Landscape */
@media screen and (max-width: 930px) and (max-height: 425px) {
  .master-flex-container .game-container .game-title {
    font-size: 5rem;
  }

  .master-flex-container .game-container .game-sub-title {
    font-size: 2rem;
    margin: 0.5rem 0;
  }

  .master-flex-container .game-container .letters-to-guess li {
    font-size: 1.6rem;
  }
  .master-flex-container .game-container .hangman-gallows {
    background-size: 60%;
    min-height: 12.5rem;
    margin: 3rem 0;
  }
  .master-flex-container .game-container .game-message,
  .master-flex-container .game-container .hangman-word,
  .master-flex-container .game-container .game-reset {
    height: 5rem;
  }
  .master-flex-container .game-container .game-message {
    font-size: 1.6rem;
    width: 75%;
  }
  .master-flex-container .game-container .game-reset {
    font-size: 1.6rem;
    width: 25%;
  }
}

@media screen and (max-width: 425px) and (max-height: 930px) {
  .master-flex-container .game-start,
  .master-flex-container .game-container {
    width: 85%;
  }
  .master-flex-container .game-container .game-title,
  .master-flex-container .game-start .game-start-title {
    font-size: 5rem;
  }

  .master-flex-container .game-start .game-start-setup .game-start__word-or-phrase {
    width: 100%;
  }

  .master-flex-container .game-container .letters-to-guess {
    flex-flow: row wrap;
  }
  .master-flex-container .game-container .letters-to-guess li {
    font-size: 1.2rem;
  }
  .master-flex-container .game-container .hangman-gallows {
    background-size: 300%;
  }
}
@media screen and (max-width: 800px) and (max-height: 375px) {
  .master-flex-container .game-start .game-start-title {
    font-size: 5rem;
  }

  .master-flex-container .game-start .game-start-setup {
    margin-top: 1rem;
  }

  .master-flex-container .game-container .game-message,
  .master-flex-container ..master-flex-container .game-container .hangman-word {
    height: 5rem;
  }
  game-container .hangman-word {
    height: 5rem;
  }

  .master-flex-container .game-container .hangman-gallows {
    margin: 0.75rem 0;
  }
}
@media screen and (max-width: 375px) and (max-height: 800px) {
  .master-flex-container .game-start .game-start-button {
    width: 100%;
  }
}
</style>
