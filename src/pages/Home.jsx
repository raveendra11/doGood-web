import React from 'react';
import { Box} from '@mui/material';


const Home = () => {
  return (
    <Box
     sx={{
    position: 'relative',
    minHeight: '100vh',
    width: '100%',
    backgroundImage: "url('/bg.png')",   // make sure bg.png is inside public/
    backgroundSize: 'cover',             // fills the whole screen
    backgroundPosition: 'center',        // centers image
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
