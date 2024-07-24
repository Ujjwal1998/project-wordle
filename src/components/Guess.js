import { range } from "../utils";
import { checkGuess } from "../game-helpers";

function Cell({ status, letter }) {
  const className = status ? `cell ${status}` : `cell`;
  return <span className={className}>{letter}</span>;
}

function Guess({ value }) {
  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={value ? value[num].letter : undefined}
          status={value ? value[num].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
