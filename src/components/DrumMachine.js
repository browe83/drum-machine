import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Pad from './Pad.js';
import data from '../data';

const useStyles = makeStyles({
  item: {
    display: 'flex',
    justifyContent: 'center',
    width: '70px',
  },
  pad: {
    margin: '5px 0px',
    width: '85%',
    height: '74px',
  },
  pressed: {
    backgroundColor: '#ffa500',
  }
})

export default function DrumMachine({ setDisplay, powerOn, volume }) {
  const classes = useStyles();

  return (
    <Grid className={classes.grid} container>
      {data.map((d, i) => (
        <Grid key={i} item xs={4} className={classes.item}>
         <Pad 
          classes={classes}
          powerOn={powerOn} 
          d={d} 
          volume={volume} 
          setDisplay={setDisplay}
          ></Pad>
        </Grid>
      ))}
    </Grid>
  );
}