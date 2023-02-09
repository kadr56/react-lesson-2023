import logo from "./logo.svg";
import "./App.css";
import { useContext, useState } from "react";
import List from "./components/List";
import { PlaceContext, PlaceProvider } from "./contexts/PlaceContext";
import StopWatch from "./components/StopWatch";
import InputFocus from "./components/InputFocus";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  const [isLarge, setIsLarge, imageSize] = useContext(PlaceContext);

  return (
    <div className="App">
      <h1>Day-58 - useRef hook</h1>

      {/* <StopWatch /> */}
      {/* <InputFocus /> */}
      <VideoPlayer />

      {/* <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={(e) => setIsLarge(e.target.checked)}
        />
        Use large image
      </label>
      <hr />

      <List /> */}
    </div>
  );
}

export default App;
