import React, { Component } from 'react';

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
      <div style={{position: 'fixed',
                   top: 0, bottom: 0, left: 0, right: 0,
                   textAlign: 'center', padding: '100px 0 0',
                   background: 'center -70px url(/images/roleta_background.jpg)'
        }}>
        <img style={{maxWidth: '100%'}} src='/images/wheel.png' alt='Roleta' onClick={this.rodar} className={this.state.girando ? 'girando' : ''}/>
      </div>
    );
  }
}
