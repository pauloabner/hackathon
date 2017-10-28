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
          <GridListTile key={'celular-proibido'}>
            <img src='/images/mobile_phone_forbidden.jpg' alt='Forbidden' />
            <Link to='/jogos/forbidden'>
              <GridListTileBar title='Quem vê perde!' subtitle='Não deixe ninguem da sua mesa olhando o celular' />
            </Link>
          </GridListTile>
          <GridListTile key={'fidelidade'}>
            <img src='/images/teste_de_fidelidade.jpg' alt='Fidelidade' />
            <Link to='/jogos/fidelidade'>
              <GridListTileBar title='Teste de Fidelidade' subtitle='Você vem sempre aqui?' />
            </Link>
          </GridListTile>
        </GridList>
      </div>
    );
  }
}
