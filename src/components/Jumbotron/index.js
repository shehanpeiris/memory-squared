import React from "react";
import "./Jumbotron.css";


function Jumbotron (props) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-2 text-center">The Memory Memory Game</h1>
        <h1 className="display-4 text-center subheading">How does your memory compare to some of the best memories in history?</h1>
        <h1 className="display-4 text-center scoreboard">Current Score: {props.currentScore} | High Score: {props.highScore}</h1>
      </div>
    </div>
  )
}

export default Jumbotron;
