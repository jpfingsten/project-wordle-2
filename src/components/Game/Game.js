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
  const [guessesArray, setGuessesArray] = React.useState([]);

  const gameWon = guessesArray[guessesArray.length - 1] === answer ? true : false;
  const gameEnded = guessesArray.length === NUM_OF_GUESSES_ALLOWED || gameWon;
  console.log(gameEnded);

  return (
    <>
      <GuessList guessList={guessList} setGuessList={setGuessList} />
      <GuessInput guess={guess} setGuess={setGuess} guessList={guessList} setGuessList={setGuessList} guessesArray={guessesArray} setGuessesArray={setGuessesArray} gameEnded={gameEnded}/>
    
      {gameEnded &&
        <div class={`${gameWon ? 'happy' : 'sad'} banner`}>
          {gameWon ? 
            <p>
              <strong>Congratulations!</strong> Got it in <strong>{guessesArray.length} guesses</strong>.
            </p> :
            <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>}
        </div>
      }
    </>
  );
}

export default Game;
