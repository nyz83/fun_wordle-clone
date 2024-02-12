import React, { useState } from 'react';

interface GuessInputProps {
  gameStatus: string;
  handleSubmitGuess: (guess: string) => void;
}

const GuessInput: React.FC<GuessInputProps> = ({
  gameStatus,
  handleSubmitGuess,
}: GuessInputProps) => {
  const [tentativeGuess, setTentativeGuess] = useState<string>('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess('');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-2 '>
      <label
        className='text-xl'
        htmlFor='guess-input'>
        Enter guess:
      </label>
      <input
        className='block w-full rounded border-2 border-neutral-300 px-4 py-2 text-3xl outline-offset-2'
        required
        disabled={gameStatus !== 'running'}
        minLength={5}
        maxLength={5}
        pattern='[a-zA-Z]{5}'
        title='5 letter word'
        value={tentativeGuess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setTentativeGuess(nextGuess);
        }}
        id='guess-input'
        type='text'
      />
    </form>
  );
};

export default GuessInput;
