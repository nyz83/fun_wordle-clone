import React from 'react';
import { range } from '../libs/utils';
import { Guess } from './Guess';

interface GuessResultsProps {
  guesses: string[];
  answer: string;
}

const GuessResults: React.FC<GuessResultsProps> = ({
  guesses,
  answer,
}: GuessResultsProps) => {
  return (
    <div>
      {range(6).map((num: number) => (
        <Guess
          key={num}
          value={guesses[num]}
          answer={answer}
        />
      ))}
    </div>
  );
};

export default GuessResults;
