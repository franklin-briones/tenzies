import React from 'react';
import './App.css';
import Die from './components/Die';
import { nanoid } from 'nanoid';

/**
 * Challenge: Update the `rollDice` function to not just roll
 * all new dice, but instead to look through the existing dice
 * to NOT role any that are being `held`.
 * 
 * Hint: this will look relatively similiar to the `holdDice`
 * function below. When creating new dice, remember to use
 * `id: nanoid()` so any new dice have an `id` as well.
 **/

function App() {
  const [dice, setDice] = React.useState(allNewDice());

  // Return array of length 10, each item is a dice object
  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        id: nanoid(),
        value: Math.ceil(Math.random() * 6),
        isHeld: false
      });
    }
    return newDice;
  }

  // Helped function to create new array of dice
  function rollDice() {
    //setDice(allNewDice());
    setDice(oldDice => oldDice.map(oldDie => {
      return oldDie.isHeld ? {...oldDie} : {id: nanoid(), value: Math.ceil(Math.random() * 6),
        isHeld: false }
    }))
  }

  // Map dice array to <Die /> elements
  const diceElements = dice.map((die) => {
    return <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} />;
  });

  // Update the color of the dice if it's held
  function holdDice(id) {
    setDice(oldDice => oldDice.map(oldDie => {
      return oldDie.id===id ? {...oldDie, isHeld: !oldDie.isHeld} : {...oldDie}
    }))
  }

  return (
    <div className="App">
      <main className="main">
        <div className="dice-container">{diceElements}</div>
        <button className="roll-button" onClick={rollDice}>
          Roll
        </button>
      </main>
    </div>
  );
}

export default App;
