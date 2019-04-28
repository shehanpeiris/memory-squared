import React, { Component } from 'react';
import Container from "./components/Container";
import Imagegrid from './components/Imagegrid';
import Jumbotron from './components/Jumbotron';
import images from "./img";

class App extends Component {  
  // Use state to define the variables needed for gameplay
  state = {
    currentScore: 0,
    highScore: 0,
    clickedPicks: []
  };

  // When user clicks on an image, this function will be called
  handleClick = image => {
    // If user has already chosen the image in this game, reset scores
    if (this.state.clickedPicks.includes(image.id)) {
      this.setState({
        clickedPicks: [],
        currentScore: 0
      });
    // If this is a new image, increment score and keep playing 
    } else {
      this.setState({
        clickedPicks: [...this.state.clickedPicks, image.id],
        currentScore: this.state.currentScore + 1
      })
    };
  };
 
  // Define method to randomize the images following Fisher-Yates shuffle model
  // Source: https://bost.ocks.org/mike/shuffle/
  roulette = (array) => {
    let n = array.length;
    let z, i;
    // While there remain elements to shuffle…
    while (n) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * n--);
      // And swap it with the current element.
      z = array[n];
      array[n] = array[i];
      array[i] = z;
    }
    return array;
  }

  
  render() {
    return (
      <div>
        <Jumbotron currentScore={this.state.currentScore} highScore={this.state.highScore}></Jumbotron>
        <Container>
          <Imagegrid images={this.roulette(images)} onClick={this.handleClick}></Imagegrid>              
        </Container>
      </div>
    );
  }
}

export default App;
