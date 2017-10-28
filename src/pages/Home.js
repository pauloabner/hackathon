import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CircularProgress } from 'material-ui/Progress';

export default class Home extends Component {

  render() {
    return (
      <div style={{position: 'fixed',
                   top: 0, bottom: 0, left: 0, right: 0,
                   textAlign: 'center', background: '#9ed4ec'}}>
        <br/>
        <br/>
        <br/>
        <Link to='/estabelecimento'>
          <img src='/images/local.png' alt='Procurando estabelecimento...' style={{maxWidth: '100%'}} />
        </Link>
        <br/>
        <CircularProgress color="accent" />
        <br/>
        <br/>
        <div style={{fontSize: '13px'}}>Procurando estabelecimento...</div>
      </div>
    );
  }
}
