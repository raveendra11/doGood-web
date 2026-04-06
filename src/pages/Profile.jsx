import React from 'react';
import { Box, Typography } from '@mui/material';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { currentUser } = useAuth();
  const visibleEntries = Object.entries(currentUser || {}).filter(
    ([key, value]) => value !== null && value !== undefined && key.toLowerCase() !== 'password',
  );

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h3" gutterBottom>Your Profile</Typography>
      {visibleEntries.map(([key, value]) => (
        <Typography key={key} variant="body1">
          {`${key.charAt(0).toUpperCase()}${key.slice(1)}: ${value}`}
        </Typography>
      ))}
    </Box>
  );
};

export default Profile;
