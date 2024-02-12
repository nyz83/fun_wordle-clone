import React from 'react';
import Banner from './Banner';

const WonBanner: React.FC<{ numOfGuesses: number }> = ({
  numOfGuesses,
}: {
  numOfGuesses: number;
}) => {
  return (
    <Banner status='happy'>
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>
          {numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`}
        </strong>
      </p>
    </Banner>
  );
};

export default WonBanner;
