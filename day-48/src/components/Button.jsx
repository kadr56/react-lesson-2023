import { useEffect, useState } from "react";

export default function Button() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      console.log("It is playing");
    } else {
      console.log("it is not playing");
    }
  }, [isPlaying]);

  function handleClick() {
    // console.log("you clicked me");
    setIsPlaying(!isPlaying);
  }

  return <button onClick={handleClick}> Click me</button>;
}
