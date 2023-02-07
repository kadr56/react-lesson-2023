import { useContext } from "react";
import Book from "./Book";
import { BookContext } from "../contexts/BookContext";

export default function Books() {
  const list = useContext(BookContext);
  return (
    <ul>
      {list.map((item, index) => {
        return <Book key={index} item={item} />;
      })}
    </ul>
  );
}
