import React, { Component } from 'react';
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Row from './components/row';
import Col from './components/col';
import Imagegrid from './components/Imagegrid';
import Jumbotron from './components/Jumbotron';

const memoryCharacters = [
  {
    name: 'Nikola Tesla',
    img: 'img/nikola_tesla.jpg',
    clicked: false
  },
  {
    name: 'LeBron James',
    img: 'img/lebron_james.jpg',
    clicked: false
  }
]

class App extends Component {  
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron></Jumbotron>
        <Container>
          <Row>
            <Col size="md-12">
              <Container>
                <Imagegrid></Imagegrid>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
