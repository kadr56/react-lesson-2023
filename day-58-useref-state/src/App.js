import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import List from "./components/List";

function App() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;

  return (
    <div className="App">
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={(e) => setIsLarge(e.target.checked)}
        />
        Use large image
      </label>
      <hr />
      <List imageSize={imageSize} />
    </div>
  );
}

export default App;
