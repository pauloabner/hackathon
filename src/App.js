import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import Home from './pages/Home';
import Estabelecimento from './pages/Estabelecimento';
import Jogos from './pages/Jogos';

import Roleta from './jogos/Roleta';
import Quiz from './jogos/Quiz';
import QuizQuestion from './jogos/QuizQuestion';

const theme = createMuiTheme();

export default class App extends Component {

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Switch>
          <Route exact path='/estabelecimento' component={Estabelecimento}/>
          <Route exact path='/jogos' component={Jogos}/>
          <Route exact path='/jogos/roleta' component={Roleta} />
          <Route exact path='/jogos/quiz' component={Quiz} />
          <Route exact path='/jogos/quiz/questions' component={QuizQuestion} />
          <Route exact path='/' component={Home}/>
          <Route component={Home}/>
        </Switch>
      </MuiThemeProvider>
    );
  }
}
