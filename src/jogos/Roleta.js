import React, { Component } from 'react';
import Button from 'material-ui/Button';

const style = {
  margin: 12,
};

export default class Roleta extends Component {
  render() {
    return (
      <div>
        <h1>Roleta</h1>
        <div >
          <img src='/images/wheel.png' style={{ maxWidth: '100%' }} />
        </div>
        <Button raised color="primary" style={style} > Rodar </Button>
      </div>
    );
  }
}
