import logo from './logo.svg';
import './App.css';

import FeedbackForm from './components/FeedbackForm';
import Login from './components/Login';
import Register from './components/Register';
import About from './components/About';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom'
import Test from './components/Test'
import Usukhuu from './components/about/Usukhuu';
import Khangai from './components/about/Khangai';
import NotFound from './components/NotFound';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", backgroundColor: "gray" }}>Day-43 - React Routes</h1>

      <div id='navbar'>
        <a href="/"> Home</a>
        <a href="/about"> About</a>
        <a href="/about/test"> About Test</a>
        <a href="/login"> LOGIN</a>
        <a href="/register"> Register</a>
        <a href="/feedback"> Feedback</a>
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about/*" element={<About />}>
          <Route path="usukhuu" element={<Usukhuu />}></Route>
          <Route path="khangai" element={<Khangai />}></Route>
          <Route path="test" element={<Test />}></Route>
        </Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/feedback" element={<FeedbackForm />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

    </div >

  )

}


export default App;
