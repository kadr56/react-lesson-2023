import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion';
import Panel from './components/Panel';
import { Routes, Route, Link } from 'react-router-dom'
import Index from './components/Index'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import Movies from './components/Movies'
import Movie from './components/Movie';


function App() {
  return (
    <div className="App">

      <h1>Day 44</h1>

      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/accordion" element={<Accordion />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movie/:id" element={<Movie />}></Route>
      </Routes>


    </div>
  );
}

export default App;
