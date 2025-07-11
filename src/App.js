import rock from './rock.png';
import paper from './paper.png';
import scissors from './scissors.png';

import './App.css';
import { useState, useEffect } from 'react';

const choices = [
  { name: "rock", img: rock },
  { name: "paper", img: paper },
  { name: "scissors", img: scissors },
];
var compWins = 0;
var userWins = 0;




function LikeButton(props) {
  const [likes, setLikes] = useState(0);

  function likeFunction() {
    setLikes(likes + 1);
  }

  useEffect(() => {
    // Use class manipulation instead of direct DOM style
    if (likes >= 5) {
      document.querySelectorAll('.Title').forEach(el => {
        el.style.color = 'red';
      });
    }
  }, [likes]);

  return (
    <div>
      <button onClick={likeFunction}>{props.description}</button>
      <p>{props.count}: {likes}</p>
    </div>
  );
}

function determineWinner(player, computer) {
  if (player === computer) return "It's a tie!";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    userWins = userWins + 1;
    return "You win!";
  }
  compWins = compWins + 1;
  return "Computer wins!";
}

function App() {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  

  const handleChoice = (choice) => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)].name;
    setPlayerChoice(choice);
    setComputerChoice(randomChoice);
    setResult(determineWinner(choice, randomChoice));
  };

  return (
    <div className="App">
      <header className="App-header">
        Welcome to our rock paper scissors game! 🪨📃✂️
        <p>
          <code> Developers 🤓☝️: Doug Ellery, Quang Minh Nguyen, Nathan Truong</code>
        </p>
      </header>

      <h2 className="App-choice">Choose your move:</h2>
      <div className="choices-container">
        {choices.map((choice) => (
          <img
            key={choice.name}
            src={choice.img}
            alt={choice.name}
            onClick={() => handleChoice(choice.name)}
            className="choice-img"
          />
        ))}
      </div>

      <div className="App-result">
        <h2 className="Title">Your choice: {playerChoice}</h2>
        <h2 className="Title">Computer's choice: {computerChoice}</h2>
        <h2 className="Title">Result: {result}</h2>
        <h2>Total Score --- You : {userWins} vs Computer : {compWins}</h2>
      </div>

      <a
        className="Tutorial-link"
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
