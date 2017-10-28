import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { Grid } from 'material-ui';

import Home from './pages/Home';
import Estabelecimento from './pages/Estabelecimento';
import Jogos from './pages/Jogos';

import Navbar from './components/Navbar';

const theme = createMuiTheme();

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <Route exact path='/' component={Home}/>
          <Route path='/estabelecimento' component={Estabelecimento}/>
          <Route path='/jogos' component={Jogos}/>
        </div>
      </MuiThemeProvider>
    );
  }
}
