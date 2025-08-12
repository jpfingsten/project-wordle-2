import React from 'react';

function Guess({guess}) {
  const lettersArray = guess.split('');

  return (
    <p className="guess">
      {lettersArray.map((letter, index) => {
        return <span className="cell" key={index}>{letter}</span>
      })}
    </p>
  );
}

export default Guess;
