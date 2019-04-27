import React, { Component } from 'react';
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Row from './components/row';
import Col from './components/col';
import Imagegrid from './components/Imagegrid';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
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
