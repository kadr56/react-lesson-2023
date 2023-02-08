import { createContext } from "react";
import { useState } from "react";

const PlaceContext = createContext(null);
const PlaceProvider = ({ children }) => {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;

  return (
    <PlaceContext.Provider value={[isLarge, setIsLarge, imageSize]}>
      {children}
    </PlaceContext.Provider>
  );
};

export { PlaceContext, PlaceProvider };
