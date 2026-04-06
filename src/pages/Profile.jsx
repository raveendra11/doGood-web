import React from 'react';
import { Box, Typography } from '@mui/material';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { currentUser } = useAuth();
  const safeUser = currentUser && typeof currentUser === 'object' ? currentUser : {};
  const formatLabel = (key) => key
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[_-]+/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
  const formatValue = (value) => (
    typeof value === 'object' ? JSON.stringify(value) : String(value)
  );

  const visibleEntries = Object.entries(safeUser).filter(
    ([key, value]) => (
      value !== null
      && value !== undefined
      && !/(password|secret|token|salt|hash)/i.test(key)
    ),
  );

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h3" gutterBottom>Your Profile</Typography>
      {visibleEntries.map(([key, value]) => (
        <Typography key={key} variant="body1">
          {`${formatLabel(key)}: ${formatValue(value)}`}
        </Typography>
      ))}
    </Box>
  );
};

export default Profile;
