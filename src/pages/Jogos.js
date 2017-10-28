import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
import Typography from 'material-ui/Typography';

export default class Jogos extends Component {

  render() {
    return (
      <div style={{position: 'fixed',
                   top: 0, bottom: 0, left: 0, right: 0,
									 overflow: 'auto',
                   padding: '0 24px', background: '#eee'}}>
				<Typography type="headline" component="h1" style={{ margin: '20px 0' }}>Jogos</Typography>
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
