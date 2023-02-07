import { createContext } from "react";
import { DATA } from "../data/data";

const BookContext = createContext(null);

const BookProvider = ({ children }) => {
  return <BookContext.Provider value={DATA}>{children}</BookContext.Provider>;
};

export { BookContext, BookProvider };
