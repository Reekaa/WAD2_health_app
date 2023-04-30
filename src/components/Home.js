import React from 'react';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const theme = createTheme();

export default function Home() {
  const navigate = useNavigate();

  const routeChange = () => {
    navigate('/register');
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Box style={{ margin: 50, padding: 20, alignItems: "center", backgroundColor: "#E9E7EF", }}>
          <Typography sx={{ mb: 2 }}>Welcome to our health fitness app, your ultimate partner in achieving your wellness goals. Our app is designed to make your health and fitness journey simple, convenient, and effective. Whether you're looking to lose weight, build muscle, or simply improve your overall health, our platform offers a variety of features to help you stay on track and motivated. </Typography>
          <Typography sx={{ mb: 2 }}>We believe that everyone deserves to live their best life, and our health fitness app is here to help you achieve that. With a comprehensive suite of tools, features, and support, we're committed to helping you transform your health and achieve your desired results. Register today and take the first step towards a happier, healthier you!</Typography>
          <Box sx={{ textAlign: "center" }}>
            <Button
              onClick={routeChange}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: '#3E2C95', maxWidth: "30%" }}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}