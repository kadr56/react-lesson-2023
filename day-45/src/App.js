import './App.css';
import Accordion from './components/Accordion';
import Panel from './components/Panel';
import { Routes, Route, Link } from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';


function App() {
  return (
    <div className="App">

      <h1>Day-45 Dynamic routing</h1>
      <nav>
        <Link to={"/accordion"}> Accordion Page</Link>
        <Link to={"/login"}> Login Page</Link>
        <Link to={"/"}> Home Page</Link>
        <Link to={"/register"}> Register Page</Link>
      </nav>

      <Routes>
        <Route path="/accordion" element={<Accordion />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>


    </div>
  );
}

export default App;
