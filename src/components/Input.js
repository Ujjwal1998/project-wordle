import { useState } from "react";

function TextInput({ handleGuessSubmit, disabledFlag }) {
  const [guess, setGuess] = useState("");
  function submitHandler(event) {
    event.preventDefault();
    console.log({ guess });
    handleGuessSubmit(guess);
    setGuess("");
  }
  return (
    <form className="guess-input-wrapper" onSubmit={(e) => submitHandler(e)}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        value={guess}
        // minLength={5}
        // maxLength={5}
        disabled={disabledFlag}
        pattern=".{5,5}"
        title="5 characters required"
        onChange={(evt) => {
          setGuess(evt.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default TextInput;
