import React, { Component } from 'react';

export default class About extends Component {

  componentDidMount() {
    this.props.appState({title: 'About'});
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <p>That's what I'm talking about</p>
      </div>
    );
  }
}
