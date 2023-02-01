import "./App.css";
import { Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import Home from "./components/Home";
function App() {
  return (
    <div>
      <h1>Admin panel Project</h1>
      <Home />

      {/* <Routes>
        <Route path="/users" element={<Users />}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
