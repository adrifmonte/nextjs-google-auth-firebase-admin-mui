import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { LogInButton } from '../auth/login';
import Link from 'next/link';
import { Button } from '@mui/material';
import MainMenu from './main-menu';
import { APP_TITLE } from './page-names';

const flexGrowStyle = { flexGrow: 1 };
const linkStyle = { textDecoration: 'none', color: 'inherit' };

export default function TopBar() {
  return (
    <Box sx={flexGrowStyle}>
      <AppBar position="static">
        <Toolbar>
          <MainMenu />
          
          <Typography variant="h5" component="h1" mr={2}>
            <Link href="/" style={linkStyle}>{APP_TITLE}</Link>
          </Typography>

          <Button variant="contained" color="primary" disableElevation>
            <Link href="/" style={linkStyle}>Home</Link>
          </Button>

          <LogInButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
}