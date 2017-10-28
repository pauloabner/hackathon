import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {

  componentDidMount() {
    this.props.appState({title: 'Home'});
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>Welcome home!</p>
        <Link to='/about'>About</Link>
      </div>
    );
  }
}
