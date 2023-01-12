import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

import Counter from './components/Counter'
import UpdateArrays from './components/UpdateArrays';
import SpreadArray from './components/SpreadArray'
import UpdatingObjects from './components/UpdatingObjects';

function App() {
  const [counter, setCounter] = useState(0);
  const [inputText, setInputText] = useState("");

  const handleClick = () => {
    setCounter(counter + 1)
  }

  function handleInput(event) {
    setInputText(event.target.value);
  }



  return (
    <div className="App">
      <h1> Day 41 </h1>


      {/* Exercise 1 */}
      <div style={{ margin: "30px" }}>
        <button onClick={handleClick}>
          Counter +1
        </button>
        <p>
          Counter: {counter}
        </p>
      </div>

      {/* Exercise 2 */}
      <div style={{ margin: "50px" }}>
        <input onChange={(e) => { handleInput(e) }}>
        </input>
        <p >
          Message: {inputText}
        </p>
      </div>

      <Counter />
      <SpreadArray />
      {/* <UpdateArrays /> */}
      <UpdatingObjects />






    </div>
  );
}

export default App;
