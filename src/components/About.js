import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';

function About() {
  return (
    <Container>
      <Box style={{ margin: 50, padding: 20, alignItems: 'center', backgroundColor: "#E9E7EF" }}>
        <Typography sx={{ mb: 2 }}>Welcome to our health and fitness goal tracking website! We are dedicated to helping individuals achieve their wellness goals and live a happier, healthier life. Our platform is designed to be user-friendly and customizable, allowing you to track your progress and stay motivated along the way.</Typography>
        <Typography sx={{ mb: 2 }}>Our mission is to empower individuals to take charge of their health and well-being by providing them with the tools and resources they need to succeed. We understand that getting started on a health and fitness journey can be overwhelming, which is why we made website with simple steps.</Typography>
        <Typography sx={{ mb: 2 }}>Whether your goal is to lose weight, build muscle, increase flexibility, or simply improve your overall health, our platform can help you stay on track and achieve your desired results. With our easy-to-use goal tracking system, you can set specific goals, track your progress, and celebrate your successes along the way.</Typography>
        <Typography sx={{ mb: 2 }}>At our health and fitness goal tracking website, we are committed to helping you become the best version of yourself. We believe that everyone deserves to feel confident, healthy, and happy, and we are here to help you achieve that. Join our community today and start living your best life!</Typography>
      </Box>
    </Container>

  );
}

export default About;