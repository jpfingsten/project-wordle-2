import React from 'react';

function GuessInput({guess, setGuess, guessList, setGuessList}) {

  const [guessesArray, setGuessesArray] = React.useState([]);
  
  return (
  <form className="guess-input-wrapper" onSubmit={(event) => {
        event.preventDefault();
        if (guess.length < 5) {window.alert('Please submit a 5-letter word.'); return}
        setGuess('');

        const nextGuessesArray = [...guessesArray, guess];
        setGuessesArray(nextGuessesArray);

        const nextGuessList = [...guessList];
        nextGuessList.splice(0, nextGuessesArray.length, ...nextGuessesArray);
        setGuessList(nextGuessList);
      }}>
    <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" pattern="[A-Za-z]{5}" title="Please submit a 5-letter word" value={guess}  onChange={(event) => {
        const currentGuess = event.target.value.toUpperCase();
        setGuess(currentGuess);
    }} />
  </form>);
}

export default GuessInput;
