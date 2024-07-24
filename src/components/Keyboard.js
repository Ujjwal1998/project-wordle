import Key from "./Key";
import { checkGuess } from "../game-helpers";

const TOP_ROW = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const HOME_ROW = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const BOTTOM_ROW = ["Z", "X", "C", "V", "B", "N", "M"];

function getStatusByLetter(validatedGuesses) {
  const statusObj = {};

  validatedGuesses.forEach((guess) => {
    guess.forEach(({ letter, status }) => {
      statusObj[letter] = status;
    });
  });

  return statusObj;
}

function Keyboard({ validatedGuesses, answer }) {
  let statusByLetter = getStatusByLetter(validatedGuesses);
  console.log("KB1", validatedGuesses);
  console.log(statusByLetter);
  // if (guessHistory.length > 0) {
  //   const guess = guessHistory[guessHistory.length - 1]["guess"];
  //   const result = checkGuess(guess, answer);
  //   console.log(result, "KB2");
  // }

  return (
    <div className="keyboard-wrapper">
      <div className="top-row">
        {TOP_ROW.map((val, idx) => (
          <Key key={idx} status={statusByLetter[val]}>
            {val}
          </Key>
        ))}
      </div>
      <div className="home-row">
        {HOME_ROW.map((val, idx) => (
          <Key key={idx} status={statusByLetter[val]}>
            {val}
          </Key>
        ))}
      </div>
      <div className="bottom-row">
        {BOTTOM_ROW.map((val, idx) => (
          <Key key={idx} status={statusByLetter[val]}>
            {val}
          </Key>
        ))}
      </div>
    </div>
  );
}

export default Keyboard;
