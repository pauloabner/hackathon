import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

export default class Estabelecimento extends Component {

  render() {
    return (
      <div style={{position: 'fixed',
                   top: 0, bottom: 0, left: 0, right: 0,
									 overflow: 'auto',
                   padding: '0 24px', background: '#eee'}}>
				<Typography type="headline" component="h1" style={{ margin: '20px 0' }}>Estabelecimentos encontrados</Typography>
				<Card>
					<Link to='/jogos'>
						<CardMedia image="/images/estabelecimentos/redlobster.jpg" title="Red Lobster" style={{height: 200}} />
						<CardContent>
							<Typography type="headline" component="h2">Red Lobster</Typography>
							<Typography component="p">
								Os melhores mariscos e frutos do mar para você desfrutar com muito sabor
							</Typography>
						</CardContent>
					</Link>
				</Card>
				<br/>
				<Card>
					<Link to='/jogos'>
						<CardMedia image="/images/estabelecimentos/pizzahut.jpg" title="Pizza Hut" style={{height: 200}} />
						<CardContent>
							<Typography type="headline" component="h2">Pizza Hut</Typography>
							<Typography component="p">
							  Pizza para você e toda a sua família.
							</Typography>
						</CardContent>
					</Link>
				</Card>
      </div>
    );
  }
}
