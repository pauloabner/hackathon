import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from 'material-ui';

export default class Navbar extends Component {

  constructor(props) {
    super(props);

    this.state = { title: '' };
  }

  render() {
    document.title = this.state.title;

    return (
      <AppBar position='static' color='default'>
        <Toolbar>
          <Typography type='title'>{this.state.title}</Typography>
        </Toolbar>
      </AppBar>
    );
  }
}
