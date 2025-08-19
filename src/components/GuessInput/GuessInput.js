import React from 'react';

function GuessInput({guess, setGuess, guessList, setGuessList}) {

  const [guessesArray, setGuessesArray] = React.useState([]);
  
  return (
  <form className="guess-input-wrapper" onSubmit={(event) => {
        event.preventDefault();
        if (guess.length < 5) {window.alert('Please submit a 5-letter word.'); return}

        const nextGuessesArray = [...guessesArray, guess];
        setGuessesArray(nextGuessesArray);

        if (nextGuessesArray.length > 6) {
          window.alert('You cannot make more than 6 guesses!');
          nextGuessesArray.pop();
          setGuess('');
          return
        }

        const nextGuessList = [...guessList];
        nextGuessList.splice(0, nextGuessesArray.length, ...nextGuessesArray);
        setGuessList(nextGuessList);
        setGuess('');
      }}>
    <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" pattern="[A-Za-z]{5}" title="Please submit a 5-letter word" value={guess}  onChange={(event) => {
        const currentGuess = event.target.value.toUpperCase();
        setGuess(currentGuess);
    }} />
  </form>);
}

export default GuessInput;
