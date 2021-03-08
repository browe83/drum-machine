import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@material-ui/core';


export default function Pad({classes, powerOn, d, volume, setDisplay}) {
  const [pressed, setPressed] = useState(false)

  const playAudio = useCallback((audioFile) => {

    const newVol = volume / 100;
    if(audioFile.paused) {
      audioFile.volume = newVol;
      audioFile.play();
    } else {
      audioFile.currentTime = 0;
      audioFile.volume = newVol;
      audioFile.play();
    }

  }, [volume])

  const handleKeyDown = useCallback(({key}) => {
    if(powerOn) {
      if(key.toUpperCase() === d.letter) {
        setPressed(true);
        playAudio(d.audio);
        setDisplay(d.text)
      }
    } 
  }, [powerOn, d.letter, d.text, d.audio, playAudio, setDisplay])
      
  const handleKeyUp = useCallback(({key}) => {
    if (powerOn) {
      if(key.toUpperCase() === d.letter) {
        setPressed(false);
      }
    }
  }, [powerOn, d.letter])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyUp', handleKeyUp);
    }

  }, [handleKeyDown, handleKeyUp])

  return (
    <Button
      id={d.letter}
      disabled={powerOn ? false : true}
      className={`${classes.pad} ${pressed ? classes.pressed : ''} drum-pad`}
      onClick={() => {
        playAudio(d.audio);
        setDisplay(d.text);
      }}
      variant='contained' 
      size='large'>
      {d.letter}
    </Button>
  )
}