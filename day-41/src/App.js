import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [inputText, setInputText] = useState("");

  function handleClick() {
    setCounter(counter + 1)
  }

  function handleInput(event) {
    setInputText(event.target.value);
  }

  return (
    <div className="App">
      <h1> Day 41 </h1>
      <div style={{ margin: "30px" }}>
        <button onClick={handleClick}>
          Counter +1
        </button>
        <p>
          Counter: {counter}
        </p>
      </div>



      <br />
      <br />
      <br />
      <br />
      <div style={{ margin: "30px" }}>
        <input onChange={handleInput}>
        </input>
        <p >
          Message: {inputText}
        </p>
      </div>





    </div>
  );
}

export default App;
