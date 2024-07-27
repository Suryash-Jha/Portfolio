import logo from './logo.svg';
import './App.css';
import { Box, IconButton, Typography, Button } from '@mui/joy';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TerminalIcon from '@mui/icons-material/Terminal';
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';


function App() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["I am a Front-End Developer", "I am a Back-End Developer", "I am an Android App Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "|"
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <Box
      sx={{
        height: '100dvh',
        width: '100dvw',
        background: '#010e1b',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <Typography
        sx={{
          // fontFamily: 'cursive',
          fontSize: '8vh',
          color: '#ffffff',
          textAlign: 'center'
        }}>Suryash Kumar Jha</Typography>
      <Box>

        <Typography
          ref={el}
          sx={{
            // fontFamily: 'cursive',
            display: 'inline',
            fontSize: '3vh',
            color: '#2df40b',
            textAlign: 'center'
          }}></Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: {
            xs: '50%',
            sm: '24%',
            sm: '10%'
          },
          alignItems: 'center',

        }}>
        <a href="https://github.com/suryash-jha" target="_blank"><IconButton size="lg"><GitHubIcon /></IconButton></a>
        <a href="https://leetcode.com/godofcode99" target="_blank"><IconButton size="lg"><TerminalIcon /></IconButton></a>
        <a href="https://www.linkedin.com/in/suryash-kumar-jha-4b1ab71bb/" target="_blank"><IconButton size="lg"><LinkedInIcon /></IconButton></a>
        <a href="https://github.com/suryash-jha" target="_blank"><IconButton size="lg"><GitHubIcon /></IconButton></a>
        <a href="https://leetcode.com/godofcode99" target="_blank"><IconButton size="lg"><TerminalIcon /></IconButton></a>
        <a href="https://www.linkedin.com/in/suryash-kumar-jha-4b1ab71bb/" target="_blank"><IconButton size="lg"><LinkedInIcon /></IconButton></a>
        {/* <a href="https://github.com/suryash-jha" target="_blank"><IconButton><GitHubIcon /></IconButton></a> */}

      </Box>
    </Box>
  );
}

export default App;
