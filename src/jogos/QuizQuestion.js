import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { Redirect, Link } from 'react-router-dom';
import Radio, { RadioGroup } from 'material-ui/Radio';
import Paper from 'material-ui/Paper';
import { FormLabel, FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form';
import Card, { CardActions, CardContent } from 'material-ui/Card';

export default class QuizQuestion extends Component {
  render() {
    return (
      <div>
        <Paper elevation={4}>
          <FormControl component="fieldset" >
            <Card>
              <CardContent>
                <Typography type="headline" component="h2">
                  De qual banda é a música "Só os Loucos Sabem"?
                </Typography>
                <Typography type="body1">
                  <RadioGroup name="question1">
                    <FormControlLabel value="answer1" control={<Radio />} label="CPM 22" />
                    <FormControlLabel value="answer2" control={<Radio />} label="Legião Urbana" />
                    <FormControlLabel value="answer3" control={<Radio />} label="Charlie Brown Junior" />
                    <FormControlLabel value="answer4" control={<Radio />} label="Hateen" />
                    <FormControlLabel value="answer5" control={<Radio />} label="Titans" />
                  </RadioGroup>
            </Typography>
              </CardContent>
              <CardActions>
                <Link to='/jogos/quiz/questions'>
                  <Button raised color="primary">Participar</Button>
                </Link>
              </CardActions>
            </Card>
            <FormLabel component="legend"></FormLabel>
          </FormControl>
        </Paper>
      </div>
    );
  }
}
