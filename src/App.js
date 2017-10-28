import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import Home from './pages/Home';
import Estabelecimento from './pages/Estabelecimento';
import Jogos from './pages/Jogos';

import Roleta from './jogos/Roleta';

import Navbar from './components/Navbar';

const theme = createMuiTheme();

export default class App extends Component {

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Switch>
          <Route exact path='/estabelecimento' component={Estabelecimento}/>
          <Route exact path='/jogos' component={Jogos}/>
          <Route exact path='/jogos/roleta' component={Roleta} />
          <Route exact path='/' component={Home}/>
          <Route component={Home}/>
        </Switch>
      </MuiThemeProvider>
    );
  }
}
