import React, { Component } from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';


export default class Quiz extends Component {
  render() {


    return (
      <div>
        <Card>
          <CardContent>
            <Typography type="headline" component="h2">
              Tema: Bandas de Rock
            </Typography>
            <Typography type="body1">
              Início: 19 Horas<br />
              Prêmio: Chopp grátis
            </Typography>
          </CardContent>
          <CardActions>
            <Button raised color="primary">Participar</Button>
          </CardActions>
        </Card>
        <br/>
        <Card>
          <CardContent>
            <Typography type="headline" component="h2">
              Tema: Séries de TV
            </Typography>
            <Typography type="body1">
              Início: 20 Horas<br />
              Prêmio: Porção Spicy Wings
            </Typography>
          </CardContent>
          <CardActions>
            <Button raised color="primary" disabled>Participar</Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}


