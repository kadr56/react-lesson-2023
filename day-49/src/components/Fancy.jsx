import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const [isFancy, setIsFancy] = useState(false);

  return (
    <div className="App">
      <Counter isFancy={isFancy} />
      <div className="fancy-container">
        <input
          type="checkbox"
          checked={isFancy}
          name="fancy"
          onClick={(e) => setIsFancy(e.target.checked)}
        />
        <label htmlFor="fancy"> Use fancy styling</label>
      </div>
    </div>
  );
}

export default App;
