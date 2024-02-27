import React from "react";
import { range, checkGuess } from "../libs/utils";

interface CellProps {
  letter?: string;
  status?: string;
}

const Cell: React.FC<CellProps> = ({ letter, status }) => {
  return (
    <span
      className={
        status
          ? `relative grid aspect-square w-3/12 place-content-center border-2 border-neutral-700 text-2xl ${status}`
          : "relative grid aspect-square w-3/12 place-content-center border-2 border-neutral-700 text-2xl"
      }
    >
      {letter}
    </span>
  );
};

const Guess: React.FC<{ value: string; answer: string }> = ({
  value,
  answer,
}) => {
  const result = checkGuess(value, answer);
  return (
    <p className="mb-2 flex items-center gap-2 ">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={result ? result[num].letter : undefined}
          status={result ? result[num].status : undefined}
        />
      ))}
    </p>
  );
};

export { Cell, Guess };
