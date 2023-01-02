import logo from './img/image-yellow.png';
import logo2 from './img/image-aqua.png';
import logo3 from './img/image-steel.png';
import logo4 from './img/image-rose.png';
import profileImg from './img/profile.png';
import './App.css';

function App() {
  return (
    <div className="App">

      <h1> Popular Products </h1><hr></hr>
      <div className='card'>
        <img src={logo} className='App-logo' alt="logo" />
        <div className='text'>
          <h4 className='title'> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
          </svg>
            55
          </h4>
          <a href='#'> Haught or Naught</a>
          <p>High-minded or absent-minded? You decide.</p>
          <div className='profile'>
            <p>
              Submitted by:
            </p>
            <img src={profileImg}></img>
          </div>
        </div>
      </div>

      <div className='card'>
        <img src={logo2} className='App-logo' alt="logo" />
        <div className='text'>
          <h4 className='title'> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
          </svg>
            44
          </h4>
          <a href='#'> Yellow Pail</a>
          <p>On-demand sand castle construction expertise.</p>
          <div className='profile'>
            <p>
              Submitted by:
            </p>
            <img src={profileImg}></img>
          </div>
        </div>
      </div>

      <div className='card'>
        <img src={logo3} className='App-logo' alt="logo" />
        <div className='text'>
          <h4 className='title'> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
          </svg>
            42
          </h4>
          <a href='#'> Tinfoild: Tailored tinfoil hats</a>
          <p>We already have your measurements and shipping address.</p>
          <div className='profile'>
            <p>
              Submitted by:
            </p>
            <img src={profileImg}></img>
          </div>
        </div>
      </div>

      <div className='card'>
        <img src={logo4} className='App-logo' alt="logo" />
        <div className='text'>
          <h4 className='title'> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
          </svg>
            42
          </h4>
          <a href='#'> Supermajority: The Fantasy Congress League</a>
          <p>Earn points when your favorite polititian pass legislation.</p>
          <div className='profile'>
            <p>
              Submitted by:
            </p>
            <img src={profileImg}></img>
          </div>
        </div>
      </div>

      <header className="App-header">
        <img src='logo-new.png' className="App-logo" alt="logo" />
      </header>
      <div> <img></img></div>

    </div>
  );
}

export default App;
