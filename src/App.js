import './App.css';
import Die from './components/Die';

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
  [diceArray, setDiceArray] = React.useState(allNewDice);
  const diceToDisplay = diceArray.map((diceVal) => {
    return <Die value={diceVal} />;
  });

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6));
    }
    return newDice;
  }

  return (
    <div className="App">
      <main className="main">
        <div className="dice-container">{Dice}</div>
      </main>
    </div>
  );
}

export default App;
