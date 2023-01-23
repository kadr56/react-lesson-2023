import logo from "./logo.svg";
import "./App.css";
import Input from "./components/Input";
import { useState } from "react";
import Anime from "./components/Anime";
import Button from "./components/Button";
import TopAnime from "./components/TopAnime";
import Exercises from "./components/Exercises";
import Exercises2 from "./components/Exercises-2";
import Pascal from "./components/Pascal";

function App() {
  const [text, setText] = useState("");
  function handleChange(event) {
    setText(event.target.value);
  }
  return (
    <div className="App">
      {/* <Exercises /> */}
      {/* <Exercises2 /> */}
      <Pascal />
      {/* <Input label="first input" value={text} onChange={handleChange} />
      <Input label="Second input" value={text} onChange={handleChange} />
      <Anime />
      <Button />
      <TopAnime /> */}
    </div>
  );
}

export default App;
