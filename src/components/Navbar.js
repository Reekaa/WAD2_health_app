import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function Navbar({loggedin}) {

  return (
    <AppBar position="static" sx={{ bgcolor: '#3E2C95' }}>
      <Toolbar sx={{ml: 10, display: 'flex', justifyContent: 'flex-end'}}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            MY HEALTH APP
        </Typography>
        <Box >
            <Link to="/" style={{ padding: 5, color:'#FFFFFF' }}>
            Home
            </Link>
            <Link to="/about" style={{ padding: 5, color:'#FFFFFF' }}>
            About
            </Link>
            <Link to="/register" style={{ padding: 5, color:'#FFFFFF' }}>
            Register
            </Link>
            <Button href="/login" variant="outlined" sx={{ my: 1, mx: 1.5, bgcolor: '#FFFFFF' }}>
                {loggedin ? "Login" : "Logout"}
            </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};


