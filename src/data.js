import closeHat from './audio/acoustic/CYCdh_K6-ClHat.wav';
import kick1 from './audio/acoustic/CYCdh_K6-Kick01.wav';
import openHat1 from './audio/acoustic/CYCdh_K6-OpHat01.wav';
import openHat2 from './audio/acoustic/CYCdh_K6-OpHat02.wav';
import snare1 from './audio/acoustic/CYCdh_K6-Snr01.wav';
import snare2 from './audio/acoustic/CYCdh_K6-Snr02.wav';
import snare3 from './audio/acoustic/CYCdh_K6-Snr03.wav';
import snare4 from './audio/acoustic/CYCdh_K6-Snr04.wav';
import buzz from './audio/acoustic/CYCdh_K6-SnrBuzz.wav';


const data = [
  {
    letter: 'Q',
    text: 'Close Hat',
    audio: new Audio(closeHat),
  },
  {
    letter: 'W',
    text: 'Kick One',
    audio: new Audio(kick1),
  },
  {
    letter: 'E',
    text: 'Open Hat One',
    audio: new Audio(openHat1),
  },
  {
    letter: 'A',
    text: 'Open Hat Two',
    audio: new Audio(openHat2),
  },
  {
    letter: 'S',
    text: 'Snare One',
    audio: new Audio(snare1),
  },
  {
    letter: 'D',
    text: 'Snare Two',
    audio: new Audio(snare2),
  },
  {
    letter: 'Z',
    text: 'Snare Three',
    audio: new Audio(snare3),
  },
  {
    letter: 'X',
    text: 'Snare Four',
    audio: new Audio(snare4),
  },
  {
    letter: 'C',
    text: 'Snare Buzz',
    audio: new Audio(buzz),
  },
]

export default data;
