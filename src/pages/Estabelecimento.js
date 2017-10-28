import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Estabelecimento extends Component {

  render() {
    return (
      <div>
        <h1>Estabelecimento</h1>
        <p>That's what I'm talking about</p>
        <Link to='/jogos'>Jogos</Link>
      </div>
    );
  }
}
