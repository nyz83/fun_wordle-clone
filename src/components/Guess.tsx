import React from 'react';
import { twMerge } from 'tailwind-merge';
import { range, checkGuess } from '../libs/utils';

interface CellProps {
  letter?: string; // The letter prop is optional and can be a string
  status?: string; // The status prop is optional and can be a string
}

const Cell: React.FC<CellProps> = ({ letter, status }) => {
  const emptyCell =
    'relative w-1/6 grid place-content-center aspect-square border-2 border-neutral-700 text-2xl';
  const addedCell = twMerge(
    'relative w-1/6 grid place-content-center aspect-square border-2 border-neutral-700 text-2xl',
    status
  );
  return <span className={status ? addedCell : emptyCell}>{letter}</span>;
};

const Guess: React.FC<{ value: string; answer: string }> = ({
  value,
  answer,
}) => {
  const result = checkGuess(value, answer);
  return (
    <p className='mb-1 flex items-center justify-center gap-1'>
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
