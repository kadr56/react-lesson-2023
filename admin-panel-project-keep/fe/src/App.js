import "./App.css";
import { Routes, Route } from "react-router-dom";
import Users from "./pages/UserList";
import Home from "./components/Home";
function App() {
  return (
    <div>
      <Home />

      {/* <Routes>
        <Route path="/users" element={<Users />}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
