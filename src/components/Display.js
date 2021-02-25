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
    padding: '10px',
    margin: '10px 0px',
  }
})

export default function Display() {
  const classes = useStyles();

  return (
    <Container className={classes.display}>
      <FormControlLabel
        control={<Switch color='primary'/>}
        label='Power'
      />
      <Typography  variant='h5' align='center' className={classes.displayElement}>Display Filler</Typography>
      <div className={classes.volume}>
        <Grid container spacing={2}>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider value={30} aria-labelledby='slider'/>
          </Grid>
          <Grid item>
            <VolumeUp />
          </Grid>
        </Grid>
      </div>
      <FormControlLabel
        control={<Switch color='primary'/>}
        label='Bank'
      />
    </Container>
  )
}