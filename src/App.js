import React from 'react';
import './App.css';
import Die from './components/Die';
import { nanoid } from 'nanoid';

/**
 * Challenge: Check the dice array for these winning conditions:
 * 1. All dice are held, and
 * 2. all dice have the same value
 * 
 * If both conditions are true, set `tenzies` to true and log
 * "You won!" to the console
 */

function App() {
  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);


  React.useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const firstVal=dice[0].value
    const allSameVal=dice.every(die => firstVal===die.value)
    if (allHeld && allSameVal) {
      setTenzies(true)
      console.log("you won!")
    }
  }, [dice])

  // Return array of length 10, each item is a dice object
  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  function generateNewDie() {
    return {
        id: nanoid(),
        value: Math.ceil(Math.random() * 6),
        isHeld: false
    }
  }

  // Helped function to create new array of dice
  function rollDice() {
    //setDice(allNewDice());
    setDice(oldDice => oldDice.map(oldDie => {
      return oldDie.isHeld ? oldDie : generateNewDie()
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
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="dice-container">{diceElements}</div>
        <button className="roll-button" onClick={rollDice}>
          Roll
        </button>
      </main>
    </div>
  );
}

export default App;
