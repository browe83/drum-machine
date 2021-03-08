import React from 'react';
import { Container, Slider, Switch, FormControlLabel, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { VolumeUp, VolumeDown } from '@material-ui/icons';

const useStyles = makeStyles({
  display: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  volume: {
      width: '100%',
  },
  displayElement: {
    backgroundColor: '#e0e0e0',
    width: '80%',
    minBlockSize: '30px',
    padding: '10px',
    margin: '10px 0px',
    borderRadius: '4px'
  }
})

export default function Display(props) {
  const classes = useStyles();

  return (
    <Container id='display' className={classes.display}>
      <FormControlLabel
        control={<Switch color='primary' onChange={props.togglePower}/>}
        label='Power'
      />
      <Typography  variant='h5' align='center' className={classes.displayElement}>{props.display}</Typography>
      <div className={classes.volume}>
        <Grid container spacing={2}>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider 
              value={props.volume} 
              onChange={(e, val) => props.handleChange(val)}
              min={0} 
              max={100}/>
          </Grid>
          <Grid item>
            <VolumeUp />
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}