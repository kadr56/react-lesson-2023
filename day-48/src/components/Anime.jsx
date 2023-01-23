import { useEffect } from "react";
import { useState } from "react";

export default function Anime() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // code
    console.log("My anime component");
    setCount(count + 1);
  }, []);
  console.log(count);

  function handleClick(e) {
    console.log("you clicked me");
  }
  return (
    <div>
      <h1>Day-48 - useEffect</h1>
      <button
        onClick={(e) => {
          handleClick(e);
          setCount(count + 1);
        }}
      >
        Anime click
      </button>
    </div>
  );
}
