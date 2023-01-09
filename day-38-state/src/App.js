import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Toolbar from './components/Toolbar';
import ToolbarNext from './components/ToolbarNext';
import ParentToolbar from './components/ParentToolbar';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <Button />
      <Toolbar />
      <ToolbarNext />
      <ParentToolbar />
      <SignUp />
    </div>
  );
}

export default App;
