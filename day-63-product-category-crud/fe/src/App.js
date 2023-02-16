import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import CategoryForm from "./components/CategoryForm";
import Categories from "./components/Categories";
import { ToastContainer } from "react-toastify";
import CategoryEditForm from "./components/CategoryEditForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/category/add" element={<CategoryForm />} />
        <Route path="/category/list" element={<Categories />} />
        <Route path="/category/edit/:id" element={<CategoryEditForm />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
