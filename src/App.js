import React from 'react';
import './App.css';
import Die from './components/Die';
import { nanoid } from 'nanoid';

/**
 * Challenge: Create a function `holdDice` that takes
 * `id` as a parameter. For now, just have the function
 * console.log(id).
 * 
 * Then, figure out how to pass that function down to each
 * instance of the Die component so when each one is clicked,
 * it logs its own unique ID property. (Hint: there's more
 * than one way to make that work, so just choose whichever
 * you want)
 * 
 */

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
    setDice(allNewDice());
  }

  // Map dice array to <Die /> elements
  const diceElements = dice.map((die) => {
    return <Die key={die.id} value={die.value} isHeld={die.isHeld} />;
  });

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
