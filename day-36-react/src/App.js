
import './App.css';
import { Button } from 'react-bootstrap'
import MainMenu from './components/MainMenu';


function App() {
  return (
    <div className="App">
      <div className='menu-container'>
        <MainMenu />
      </div>

      <button type="button" className="btn btn-danger">Danger</button>
      <Button variant='secondary'> Test</Button>

    </div>
  );
}

export default App;
