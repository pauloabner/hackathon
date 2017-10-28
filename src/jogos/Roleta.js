import React, { Component } from 'react';

export default class Roleta extends Component {

  constructor(props) {
    super(props);
    this.state = { girando: false, premio: false };
  }

  rodar = () => {
    this.setState({girando: !this.state.girando});
    setTimeout(() => {
      this.setState({girando: false, premio: true});
     }, 3000);
  }

  render() {
    return (
      <div style={{position: 'fixed',
                   top: 0, bottom: 0, left: 0, right: 0,
                   textAlign: 'center', padding: '100px 0 0',
                   background: 'center url(/images/roleta_background.jpg)'
        }}>
        <img style={{maxWidth: '80%', width: window.innerWidth, display: this.state.premio ? 'none' : 'inline-block'}}
             src='/images/wheel.png' alt='Roleta' onClick={this.rodar} className={this.state.girando ? 'girando' : ''}/>
        <img style={{maxWidth: '80%', width: window.innerWidth, display: this.state.premio ? 'inline-block' : 'none'}}
             src='/images/5_percent.png' alt='Prêmio'/>
      </div>
    );
  }
}
