import React from 'react';
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
