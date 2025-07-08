import rock from './rock.png';
import paper from './paper.png';
import scissors from './scissors.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Welcome to our rock paper scissors game!
      </header>
      <h2 className = "App-choice">
        Choose your move:
        <br></br>
        <img src={rock} className="App-rock" alt="logo" />
        <img src={paper} className="App-paper" alt="logo" />
        <img src={scissors} className="App-scissors" alt="logo" />
      </h2>
    </div>
  );
}

export default App;
