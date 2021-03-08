import { useState } from 'react';
import { Container } from '@material-ui/core';
import DrumMachine from './components/DrumMachine';
import Display from './components/Display';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#a9a9a9',
    
  },
  border: {
     display: 'flex', 
     alignItems: 'center', 
     border: '10px solid orange', 
     borderRadius: '4px',
     [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    }
  },
}));

function App() {
  const classes = useStyles();
  const [power, setPower] = useState(false);
  const [display, setDisplay] = useState('');
  const [volume, setVolume] = useState(50);

  const togglePower = () => {
    const currentState = power;
    setPower(!currentState);
  }

  const handleChange = (value) => {
    setVolume(value);
  }

  return (
   <Container id='drum-machine' maxWidth='sm' className={classes.container}> 
    <div className={classes.border}>
      <DrumMachine powerOn={power} setDisplay={setDisplay} volume={volume}/>
      <Display 
        display={display} 
        togglePower={togglePower} 
        volume={volume} 
        handleChange={handleChange}/>
    </div>
   </Container>
  )
}

export default App;
