import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Image from '../images/brett-jordan-MwkDKpOQmGc-unsplash.jpg'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

export default function Home() {
  const navigate = useNavigate();

  const routeChange = () =>{ 
    navigate('/register');
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid
          container
          component="main"
          sx={{ height: '100vh', width: '200vh' }}
        >
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: `url(${Image})`,
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Typography component="h1" variant="h5">
              Sign up to our health up to track your goals for a healthier future
            </Typography>
            <Button
              onClick={routeChange}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: '#3E2C95' }}
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}