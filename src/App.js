import './App.css';
import Die from "./components/Die"



function App() {

const diceVals = Array.from({length: 10}, () => Math.floor(Math.random() * 10))
const Dice = diceVals.map((diceVal) => {
    <Die value={diceVal} />
})

  return (
    <div className="App">
      <main className='main'>
        <div className='dice-container'>
          {Dice}
        </div>
      </main>
    </div>
  );
}

export default App;
