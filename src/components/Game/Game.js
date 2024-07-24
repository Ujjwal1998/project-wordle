import React from "react";
import { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import TextInput from "../Input";
import Guesses from "../Guesses";
import Keyboard from "../Keyboard";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";
// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function BannerSuccess({ tries, reset }) {
  return (
    <div class="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{tries} guesses</strong>.
      </p>
      <button onClick={() => reset()}>RESET</button>
    </div>
  );
}
function BannerFailure({ answer, reset }) {
  return (
    <div class="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <button onClick={() => reset()}>RESET</button>
    </div>
  );
}

function Game() {
  const [guessHistory, setGuessHistory] = useState([]);
  const [showBanner, setShowBanner] = useState(false);
  const [hasWon, setHasWon] = useState(false);
  const [answer, setAnswer] = useState(() => sample(WORDS));
  function handleGuessSubmit(guess) {
    const updatedHistory = [
      ...guessHistory,
      { guess, uuid: crypto.randomUUID() },
    ];
    setGuessHistory(updatedHistory);
  }
  if (guessHistory.length > 0 && hasWon === false && showBanner === false) {
    if (guessHistory[guessHistory.length - 1]["guess"] === answer) {
      setShowBanner(true);
      setHasWon(true);
    }
    if (guessHistory.length === NUM_OF_GUESSES_ALLOWED && !hasWon) {
      setShowBanner(true);
    }
  }
  const validatedGuesses = guessHistory.map((guess) =>
    checkGuess(guess.guess, answer)
  );
  function reset() {
    let newWord = sample(WORDS);
    setShowBanner(false);
    setGuessHistory([]);
    setHasWon(false);
  }
  return (
    <>
      {hasWon && (
        <BannerSuccess
          tries={guessHistory.length - 1}
          reset={reset}
        ></BannerSuccess>
      )}
      {showBanner && !hasWon && (
        <BannerFailure answer={answer} reset={reset}></BannerFailure>
      )}
      <Guesses validatedGuesses={validatedGuesses} answer={answer}></Guesses>
      <TextInput
        handleGuessSubmit={handleGuessSubmit}
        disabledFlag={showBanner}
      ></TextInput>
      <Keyboard validatedGuesses={validatedGuesses} answer={answer}></Keyboard>
    </>
  );
}

export default Game;
