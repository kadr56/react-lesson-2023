import logo from "./logo.svg";
import "./App.css";
import UserRegisterForm from "./components/UserRegisterForm";
import { Routes, Route } from "react-router-dom";
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
      <h1>Day - 62 User Login CRUD</h1>
      <h5>User register Form</h5>

      <Routes>
        <Route path="/register" element={<UserRegisterForm />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
