import React, { Component } from 'react';
import { Button } from 'material-ui';

export default class Roleta extends Component {

  constructor(props) {
    super(props);
    this.state = { girando: false };
  }

  rodar = () => {
    this.setState({girando: !this.state.girando});
  }

  render() {
    return (
      <div style={{textAlign: 'center', padding: '50px 0 0'}}>
        <img style={{maxWidth: '100%'}} src='/images/wheel.png' alt='Roleta' onClick={this.rodar} className={this.state.girando ? 'girando' : ''}/>
      </div>
    );
  }
}
