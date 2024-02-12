import { useState, useEffect } from 'react';

import { sample } from '../libs/utils';
import { WORDS } from '../libs/data';

import GuessInput from './GuessInput';
import GuessResults from './GuessResults';
import WonBanner from './WonBanner';
import LostBanner from './LostBanner';

const answer: string = sample(WORDS);

function Game(): JSX.Element {
  const [gameStatus, setGameStatus] = useState<string>('running');
  const [guesses, setGuesses] = useState<string[]>([]);

  function handleSubmitGuess(tentativeGuess: string): void {
    const nextGuesses: string[] = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);

    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length >= 6) {
      setGameStatus('lost');
    }
  }

  useEffect(() => {
    function handleKeydown(event: KeyboardEvent): void {
      if (event.code === 'Space') {
        setGuesses([]);
        setGameStatus('running');
      }
    }
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  return (
    <>
      <GuessResults
        guesses={guesses}
        answer={answer}
      />
      <GuessInput
        gameStatus={gameStatus}
        handleSubmitGuess={handleSubmitGuess}
      />
      {gameStatus === 'won' && <WonBanner numOfGuesses={guesses.length} />}
      {gameStatus === 'lost' && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
