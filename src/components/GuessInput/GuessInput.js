import React from 'react';

function GuessInput() {

  const [guess, setGuess] = React.useState("");
  
  return (
  <form class="guess-input-wrapper" onSubmit={(event) => {
        event.preventDefault();
        if (guess.length < 5) {window.alert('Please submit a 5-letter word.'); return}
        console.log(`guess: ${guess}`)
        setGuess('');
      }}>
    <label for="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" maxlength="5" value={guess}  onChange={(event) => {
        const currentGuess = event.target.value.toUpperCase();
        setGuess(currentGuess);
    }} />
  </form>);
}

export default GuessInput;
