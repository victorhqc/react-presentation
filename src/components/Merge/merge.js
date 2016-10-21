import React, { Component } from 'react';
import { Link } from 'react-router';

import corgi from './corgi.gif';

export default class Merge extends Component {

  constructor(props) {
    super(props);

    this.handleMerge = this.handleMerge.bind(this);
  }

  handleMerge() {
    const { mergeApp } = this.props;

    const data = {
      message: 'Welcome Avocarrot! :)'
    };

    mergeApp(data);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Merge with avocarrot! :D</h2>
        </div>
        <p className="App-intro">
          <Link to="/">Go home</Link>
        </p>
        <img src={corgi} height="200"/>
        <button onClick={this.handleMerge}>
          Merge Glispa with Avocarrot! ಠ‿ಠ
        </button>
      </div>
    );
  }
}
