import React from 'react';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box
  sx={{
    height: "90vh",                // full viewport height
    width: "100%",                  // full width
    backgroundImage: "url('/bg.png')",
    backgroundSize: "100%",      // fit entire image without cropping
    backgroundPosition: "center",   // center it
    backgroundRepeat: "no-repeat",  
    backgroundAttachment: "fixed",  // keeps it fixed (doesn't scroll)
    display: "fixed",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }}
>

      <Box
  sx={{
    position: "absolute",
    bottom: 1,         // distance from bottom
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: 3              // space between buttons
  }}
>
  <Button
    variant="contained"
    component={Link}
    to="/register"
    sx={{ color: "white", borderColor: "white" }}
  >
    Join Us
  </Button>

  <Button
    variant="outlined"
    component={Link}
    to="/about"
    sx={{ color: "white" }}
  >
    Learn More
  </Button>
</Box>
  
      
    </Box>
    
  );
};

export default Home;
