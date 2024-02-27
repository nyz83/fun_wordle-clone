import React, { useEffect, useRef, useState } from "react";
import { sample } from "../libs/utils";
import { WORDS } from "../libs/data";
import GuessInput from "./GuessInput";
import GuessResults from "./GuessResults";
import WonBanner from "./WonBanner";
import LostBanner from "./LostBanner";

const Game: React.FC = () => {
  const [answer, setAnswer] = useState<string>(() => sample(WORDS));
  const [gameStatus, setGameStatus] = useState<string>("running");
  const [guesses, setGuesses] = useState<string[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [gameStatus]);

  function handleSubmitGuess(tentativeGuess: string): void {
    const nextGuesses: string[] = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);

    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= 6) {
      setGameStatus("lost");
    }
  }

  function handleRestart() {
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setGuesses([]);
    setGameStatus("running");
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        gameStatus={gameStatus}
        handleSubmitGuess={handleSubmitGuess}
        ref={inputRef}
      />
      {gameStatus === "won" && (
        <WonBanner
          numOfGuesses={guesses.length}
          handleRestart={handleRestart}
        />
      )}
      {gameStatus === "lost" && (
        <LostBanner answer={answer} handleRestart={handleRestart} />
      )}
    </>
  );
};

export default Game;
