import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import Guess from '../Guess/Guess';

function GuessList({guessList}) {

  return (
  <div className="guess-results">
    {guessList.map((guess, index) => {
    return <Guess key={index} guess={guess} />
  })}
  </div>
  )
}

export default GuessList;
