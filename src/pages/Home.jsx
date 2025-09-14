import React from 'react';
import { Box } from '@mui/material';

const Home = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        backgroundImage: {
          xs: "url('/bg-mobile.png')", // mobile version
          md: "url('/bg.png')",        // desktop version
        },
        backgroundSize: {
          xs: 'contain', // keeps full image visible on small screens
          md: 'cover',   // fills screen on larger devices
        },
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Content wrapper */}
    </Box>
  );
};

export default Home;
