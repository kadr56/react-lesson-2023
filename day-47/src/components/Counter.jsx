import { useState } from "react";
export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [hover, setHover] = useState(false);

  //   let colorStyle = {
  //     backgroundColor: `${col}`
  //   }

  return (
    <div
      className={hover ? "counter hover" : "counter"}
      onPointerEnter={() => {
        setHover(!hover);
      }}
      onPointerLeave={() => {
        setHover(!hover);
      }}
    >
      <h1>{counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Add one
      </button>
    </div>
  );
}
