import { Container } from '@material-ui/core';
import DrumMachine from './components/DrumMachine';
import Display from './components/Display';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#a9a9a9',
  }
});

function App() {
  const classes = useStyles();

  return (
   <Container maxWidth='sm' className={classes.container}> 
    <div style={{display: 'flex', alignItems: 'center', border: '10px solid orange'}}>
      <DrumMachine />
      <Display />
    </div>
   </Container>
  )
}

export default App;
