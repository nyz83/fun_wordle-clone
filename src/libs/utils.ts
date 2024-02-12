export const sample = <T>(arr: T[]): T => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const range = (
  start: number,
  end?: number,
  step: number = 1
): number[] => {
  const output: number[] = [];
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

export function checkGuess(
  guess: string,
  answer: string
): { letter: string; status: string }[] | null {
  const SOLVED_CHAR = '✓';

  if (!guess) {
    return null;
  }

  const guessChars: string[] = guess.toUpperCase().split('');
  const answerChars: string[] = answer.split('');

  const result: { letter: string; status: string }[] = [];

  for (let i = 0; i < guessChars.length; i++) {
    if (guessChars[i] === answerChars[i]) {
      result[i] = {
        letter: guessChars[i],
        status: 'correct',
      };
      answerChars[i] = SOLVED_CHAR;
      guessChars[i] = SOLVED_CHAR;
    }
  }

  for (let i = 0; i < guessChars.length; i++) {
    if (guessChars[i] === SOLVED_CHAR) {
      continue;
    }

    let status: string = 'incorrect';
    const misplacedIndex: number = answerChars.findIndex(
      (char: string) => char === guessChars[i]
    );
    if (misplacedIndex >= 0) {
      status = 'misplaced';
      answerChars[misplacedIndex] = SOLVED_CHAR;
    }

    result[i] = {
      letter: guessChars[i],
      status: status,
    };
  }

  return result;
}
