import React, { Component } from 'react';
import "./resources/css/bootstrap.min.css";
import "./resources/css/fonts/font-awesome/css/font-awesome.min.css";
import "./resources/css/fonts/fontello/css/fontello.css";
import "./resources/css/main.css";
import "./App.css";

import Header  from "./components/header/header";
import Container from './components/container/container';

class App extends Component {
  render() {
    return (
      <div className="container" id="container">
        <Header></Header>
        <Container></Container>
      </div>
    );
  }
}

export default App;
