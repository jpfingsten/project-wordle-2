import React from 'react';

function GuessInput() {

  const [guess, setGuess] = React.useState("");

  console.log(guess);
  
  return (
  <form class="guess-input-wrapper">
    <label for="guess-input">Enter guess:</label>
    <input id="guess-input" type="text" onChange={(event) => {setGuess(event.target.value)}} />
  </form>);
}

export default GuessInput;
