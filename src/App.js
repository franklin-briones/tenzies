import React from 'react';
import Confetti from 'react-confetti';
import './App.css';
import Die from './components/Die';
import { nanoid } from 'nanoid';

/**
 * Challenge: Allow the user to play a new game when the
 * button is clicked and they've already won
*/
function App() {
  // Create state var that contains array of Dice for each new game
  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstVal = dice[0].value;
    const allSameVal = dice.every((die) => firstVal === die.value);
    if (allHeld && allSameVal) {
      setTenzies(true);
      console.log('you won!');
    }
  }, [dice]);

 /**
 * @return {An array of length 10, each item is a dice object} 
 */
  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }
  /**
   * 
   * @returns {A new object with a unique id, random int from 1-6, and isHeld to false}
   */
  function generateNewDie() {
    return {
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHeld: false
    };
  }

  // Helped function to create new array of dice
  /**
   * When a new game is created, the old dice are replaced with new dice
   */
  function rollDice() {
    setDice((oldDice) =>
      oldDice.map((oldDie) => {
        return oldDie.isHeld ? oldDie : generateNewDie();
      })
    );
  }

  // Map dice array to <Die /> elements
  const diceElements = dice.map((die) => {
    return (
      <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} />
    );
  });

  // Update the color of the dice if it's held
  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((oldDie) => {
        return oldDie.id === id ? { ...oldDie, isHeld: !oldDie.isHeld } : { ...oldDie };
      })
    );
  }

  return (
    <div className="App">
      <main className="main">
        <h1 className="title">Tenzies</h1>
        <p className="instructions">
          Roll until all dice are the same. Click each die to freeze it at its current value between
          rolls.
        </p>
        <div className="dice-container">{diceElements}</div>
        <button className="roll-button" onClick={rollDice}>
          {!tenzies ? 'Roll' : 'New Game'}
        </button>
        {tenzies && <Confetti />}
      </main>
    </div>
  );
}

export default App;
