import React, { useState, forwardRef } from "react";

interface GuessInputProps {
  gameStatus: string;
  handleSubmitGuess: (guess: string) => void;
}

const GuessInput = forwardRef<HTMLInputElement, GuessInputProps>(
  ({ gameStatus, handleSubmitGuess }, ref) => {
    const [tentativeGuess, setTentativeGuess] = useState<string>("");

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      handleSubmitGuess(tentativeGuess);
      setTentativeGuess("");
    }

    return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <label className="text-xl" htmlFor="guess-input">
          Enter Guess:
        </label>
        <input
          className="block w-full rounded border-2 border-neutral-300 px-4 py-2 text-3xl outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          required
          disabled={gameStatus !== "running"}
          type="text"
          id="guess-input"
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          ref={ref}
          value={tentativeGuess}
          onChange={(event) => {
            const nextGuess = event.target.value.toUpperCase();
            setTentativeGuess(nextGuess);
          }}
        />
      </form>
    );
  },
);

export default GuessInput;
