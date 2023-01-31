import "./App.css";
import { Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import SideBar from "./components/SideBar";
function App() {
  return (
    <div>
      <h1>Admin panel Project</h1>
      <Routes>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/" element={<SideBar />} />
      </Routes>
    </div>
  );
}

export default App;
