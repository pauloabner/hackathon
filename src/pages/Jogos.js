import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';

export default class Jogos extends Component {

  render() {
    return (
      <div>
        <h1>Jogos</h1>
        <p>That's what I'm talking about</p>
        <GridList>
          <GridListTile key={'quiz'}>
            <img src='/images/quiz.jpg' alt='Quiz' />
            <Link to='/jogos/quiz'>
              <GridListTileBar title='Quiz' subtitle='Um jogo de perguntas bacana' />
            </Link>
          </GridListTile>
          <GridListTile key={'roleta'}>
            <img src='/images/roleta.jpg' alt='Roleta' />
            <Link to='/jogos/roleta'>
              <GridListTileBar title='Roleta' subtitle='Teste sua sorte' />
            </Link>
          </GridListTile>
          <GridListTile key={'dados'}>
            <img src='/images/dados.jpg' alt='Dados' />
            <Link to='/jogos/dados'>
              <GridListTileBar title='Dados' subtitle='Jogue dados com a galera' />
            </Link>
          </GridListTile>
        </GridList>
      </div>
    );
  }
}
