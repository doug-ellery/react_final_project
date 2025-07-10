import rock from './rock.png';
import paper from './paper.png';
import scissors from './scissors.png';

import './App.css';
import {useState, useEffect} from 'react';

function LikeButton(props) {
    const [likes, setLikes] = useState(0);

    function likeFunction() {
      setLikes(likes + 1)
    }

    function changeTitleColor() {
    const titleElement = document.querySelector('.Title');
      if (likes >= 5) {
        titleElement.style.color = 'red';
      } 
    }

  useEffect(changeTitleColor, [likes]);
    return (
      <div>
      <button onClick={likeFunction}>{props.description}</button>
         <p>{props.count}: {likes}</p>
      </div>
    )
 }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Welcome to our rock paper scissors game! 🪨📃✂️
        <p>
          <code> Developers 🤓☝️: Doug Ellery, Quang Minh Nguyen, Nathan Truong</code>
        </p>
        </header>
      <h2 className = "App-choice">
        Choose your move:
        <br></br>
        <img src={rock} className="App-rock" alt="logo" />
        <img src={paper} className="App-paper" alt="logo" />
        <img src={scissors} className="App-scissors" alt="logo" />
      </h2>
        <a
          className="Tutorial link"
          href="https://www.youtube.com/watch?v=ND4fd6yScBM"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here for a tutorial!
        </a>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10rem' }}>
        <LikeButton description="Follow our page! (๑´>᎑<)~*" count="Follows" />
        <LikeButton description="Drop a Like! ┗(^o^)┓" count="Likes" />
        </div>
    </div>
  );
}

export default App;
