import Books from "./components/Books";
import { BookContext, BookProvider } from "./contexts/BookContext";
import { DATA } from "./data/data";
export default function BooksList() {
  return (
    <div>
      <BookProvider>
        <Books />
      </BookProvider>
    </div>
  );
}
