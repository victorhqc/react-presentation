import React, { Component } from 'react';
import { Link } from 'react-router';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  getRenderMessage() {
    const { merge } = this.props;

    if (!merge) { return null; }

    return merge.message;
  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Glispa</h2>
        </div>
        <p className="App-intro">
          Ampiri UI is completed written in React (alongside Redux), with some Node.js in a thin layer of backend to
          proxy with our real Java APIs
        </p>
        <Link to="/merge">Go to Merge</Link>
        <h1>{this.getRenderMessage()}</h1>
      </div>
    );
  }
}

export default App;
