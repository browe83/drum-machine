import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const keys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

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
});

export default function DrumPad(props) {
  const classes = useStyles();
  
  return (
    <Grid className={classes.grid} container>
      {keys.map((k, i) => (
        <Grid key={i} item xs={4} className={classes.item}>
          <Button
            className={classes.pad} 
            onClick={() => console.log('clicked!')}
            variant='contained' 
            size='large' >{k}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}