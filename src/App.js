import './App.css';
import Die from "./components/Die"

function allNewDice() {
  const newDice=[]
  for (let i = 0; i< 10; i++) {
    newDice.push(Math.ceil(Math.random() * 6))
  }
  return newDice
}

function App() {

const diceNums= allNewDice()
const Dice = diceNums.map((diceVal) => {
    return (
      <Die
      value={diceVal} 
      />
      )
})


console.log(Dice[1])
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
