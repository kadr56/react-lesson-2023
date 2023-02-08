import logo from "./logo.svg";
import "./App.css";
import { useContext, useState } from "react";
import List from "./components/List";
import { PlaceContext, PlaceProvider } from "./contexts/PlaceContext";

function App() {
  const [isLarge, setIsLarge, imageSize] = useContext(PlaceContext);

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

      <List />
    </div>
  );
}

export default App;
