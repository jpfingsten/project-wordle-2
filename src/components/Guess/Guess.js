import React from 'react';
import {checkGuess} from '../../game-helpers';
import {answer} from '../Game';

function Guess({guess}) {

  const checkedGuess = checkGuess(guess, answer);

  return (
    guess === "" ? 
    <p className="guess">
      <span className="cell"></span>
      <span className="cell"></span>
      <span className="cell"></span>
      <span className="cell"></span>
      <span className="cell"></span>
    </p> :
    <p className="guess">
      {checkedGuess.map((character, index) => {
        return <span className={`cell ${character.status}`} key={index}>{character.letter}</span>
      })}
    </p>
  );
}

export default Guess;
