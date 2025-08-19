import React from 'react';
import GuessInput from '../GuessInput';
import GuessList from '../GuessList';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
export const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState("");
  const [guessList, setGuessList] = React.useState(Array(NUM_OF_GUESSES_ALLOWED).fill(''));

  return (
    <>
      <GuessList guessList={guessList} setGuessList={setGuessList} />
      <GuessInput guess={guess} setGuess={setGuess} guessList={guessList} setGuessList={setGuessList}/>
    </>
  );
}

export default Game;
