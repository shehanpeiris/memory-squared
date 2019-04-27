import React from "react";

function Jumbotron (props) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-2 text-center">The Memory Memory Game</h1>
        <h1 className="display-4 text-center">How does your memory compare to some of the best memories in history?</h1>
        <h1 className="display-4 text-center">Current Score: </h1>
        <h1 className="display-4 text-center">High Score: </h1>
        <p className="lead">How it works: Click on each of the 12 memory specialists shown below.</p>
      </div>
    </div>
  )
}

export default Jumbotron;
