import logo from './logo.svg';
import './App.css';
import { Box, IconButton, Typography, Button } from '@mui/joy';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TerminalIcon from '@mui/icons-material/Terminal';

function App() {
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
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: '10%',
          alignItems: 'center',

        }}>
        <a href="https://github.com/suryash-jha" target="_blank"><IconButton><GitHubIcon /></IconButton></a>
        <a href="https://leetcode.com/godofcode99" target="_blank"><IconButton><TerminalIcon /></IconButton></a>
        <a href="https://www.linkedin.com/in/suryash-kumar-jha-4b1ab71bb/" target="_blank"><IconButton><LinkedInIcon /></IconButton></a>
        {/* <a href="https://github.com/suryash-jha" target="_blank"><IconButton><GitHubIcon /></IconButton></a> */}

      </Box>
    </Box>
  );
}

export default App;
