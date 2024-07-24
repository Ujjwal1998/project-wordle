import Guess from "./Guess";
import { range } from "../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../constants";

function Guesses({ validatedGuesses, answer }) {
  // console.log(guessHistory[0]);
  console.log(validatedGuesses, typeof validatedGuesses, validatedGuesses[0]);
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED, 1).map((val) => (
        <Guess key={val} value={validatedGuesses[val]}></Guess>
      ))}
      {/* {guessHistory.map((guess) => (
        <p className="guess" key={guess.uuid}>
          {guess.guess}
        </p>
      ))} */}
    </div>
  );
}

export default Guesses;
