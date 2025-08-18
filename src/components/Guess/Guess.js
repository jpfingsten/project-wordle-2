import React from 'react';

function Guess({guess}) {
  const lettersArray = guess.split('');

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
      {lettersArray.map((letter, index) => {
        return <span className="cell" key={index}>{letter}</span>
      })}
    </p>
  );
}

export default Guess;
