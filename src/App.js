import rock from './rock.png';
import paper from './paper.png';
import scissors from './scissors.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Welcome to our rock paper scissors game!
        <img src={rock} className="App-rock" alt="logo" />
        <img src={paper} className="App-paper" alt="logo" />
        <img src={scissors} className="App-scissors" alt="logo" />
      </header>
    </div>
  );
}

export default App;
