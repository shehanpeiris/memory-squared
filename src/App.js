import React, { Component } from 'react';
import Container from "./components/Container";
import Imagegrid from './components/Imagegrid';
import Jumbotron from './components/Jumbotron';

class App extends Component {  
  // Use state to define the variables needed for gameplay
  state = {
    currentScore: 0,
    highScore: 0,
    clickedPicks: []
  };

  handleClick = image => {
    // this.setState({
    //   clickedPicks: [...this.state.clickedPicks, image]
    // })
    console.log("Testing click", image);
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
        <Jumbotron></Jumbotron>
        <Container>
          <Imagegrid onClick={this.handleClick}></Imagegrid>              
        </Container>
      </div>
    );
  }
}

export default App;
