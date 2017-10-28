import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import Home from './pages/Home';
import About from './pages/About';

import Navbar from './components/Navbar';

const theme = createMuiTheme();

export default class App extends Component {

  constructor(props) {
    super(props);
    this.sharedState = {}
  }

  setSharedState(newState) {
    Object.assign(this.sharedState, newState);
  } 

  componentDidMount() {
    this.navbar.setState(this.sharedState);
  }
  
  componentDidUpdate() {
    this.navbar.setState(this.sharedState);
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <Navbar ref={(ref) => {this.navbar = ref}}/>
          <Route exact path='/' render={() => {
            return <Home appState={this.setSharedState.bind(this)}/>
          }}/>
          <Route exact path='/about' render={() => {
            return <About appState={this.setSharedState.bind(this)}/>
          }}/>
        </div>
      </MuiThemeProvider>
    );
  }
}
