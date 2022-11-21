import React from 'react';
import './App.css';
import Die from './components/Die';
import {nanoid} from "nanoid"

/**
 * Challenge:
 *
 * Create state to hold our array of numbers. (Initialize
 * the state by calling our `allNewDice` function so it
 * loads all new dice as soon as the app loads)
 *
 * Map over the state numbers array to generate our array
 * of Die elements and render those in place of our
 * manually-written 10 Die elements.
 */

function App() {
  const [dice, setDice] = React.useState(allNewDice());

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        id: nanoid(),
        value: Math.ceil(Math.random() * 6),
        isHeld: false
      })
    }
    return newDice;
  }

  function rollDice() {
    setDice(allNewDice());
  }

  const diceElements = dice.map((die) => {return <Die key={die.id} value={die.value} />;});

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
